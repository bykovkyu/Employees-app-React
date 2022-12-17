import { Component } from 'react';
import nextId from 'react-id-generator';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John.C', salary: 4800, increase: true, rise: false, id: nextId() },
        { name: 'Alex M.', salary: 23000, increase: false, rise: true, id: nextId() },
        { name: 'Carl N.', salary: 15000, increase: false, rise: false, id: nextId() },
      ],
      term: '',
      activeFlt: 'all',
    };
  }

  addItem = ({ name, salary }) => {
    const newItem = { id: nextId(), name, salary, increase: false, rise: false };
    this.setState(({ data }) => {
      const newData = [...data, newItem];
      return {
        data: newData,
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((item) => item.id !== id);
      return {
        data: newData,
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilter = (prop) => {
    this.setState({ activeFlt: prop });
  };

  render() {
    const { data, term, activeFlt } = this.state;
    const totalEmployees = data.length;
    const totalIncreased = data.filter((item) => item.increase).length;
    let visibleData = this.searchEmp(data, term);
    switch (activeFlt) {
      case 'rise':
        visibleData = visibleData.filter((item) => item.rise);
        break;
      case 'salary':
        visibleData = visibleData.filter((item) => item.salary > 1000);
        break;
      default:
        break;
    }

    return (
      <div className='app'>
        <AppInfo
          totalEmployees={totalEmployees}
          totalIncreased={totalIncreased}
        />

        <div className='search-panel'>
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onFilter={this.onFilter} />
        </div>

        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
