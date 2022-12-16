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
      /* 
      // const index = data.findIndex((elem) => elem.id === id);
      const before = data.slice(0, index);
      const after = data.slice(index + 1);
      const newArr = [...before, ...after]; 
      */

      /* const newData = data.slice();
      newData.splice(index, 1); */

      return { data: data.filter((item) => item.id !== id) };
    });
  };

  render() {
    return (
      <div className='app'>
        <AppInfo />

        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
