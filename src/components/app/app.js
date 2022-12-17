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
    // const { totalEmployeers, totalIncrease } = this.refreshInfo(this.state.data);
    // this.state.totalEmployeers = totalEmployeers;
    // this.state.totalIncrease = totalIncrease;
  }

  addItem = ({ name, salary }) => {
    const newItem = { id: nextId(), name, salary, increase: false, rise: false };
    this.setState(({ data }) => {
      const newData = [...data, newItem];
      return {
        data: newData,
        // ...this.refreshInfo(newData),
      };
    });
  };

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const newData = data.filter((item) => item.id !== id);
      return {
        data: newData,
        // ...this.refreshInfo(newData),
      };
    });
  };

  // refreshInfo = (data) => {
  //   return {
  //     totalEmployeers: data.length,
  //     totalIncrease: data.filter((item) => item.increase).length,
  //   };
  // };

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
  /*   onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const newData = data.map((item) => {
        if (item.id === id) {
          return { ...item, increase: !item.increase };
        }
        return item;
      });
      return {
        data: newData,
        // ...this.refreshInfo(newData),
      };
    });
  }; */

  /*   onToggleRise = (id) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, rise: !item.rise };
        }
        return item;
      }),
    }));
  }; */

  render() {
    const totalEmployees = this.state.data.length;
    const totalIncreased = this.state.data.filter((item) => item.increase).length;

    return (
      <div className='app'>
        <AppInfo
          totalEmployees={totalEmployees}
          totalIncreased={totalIncreased}
        />

        <div className='search-panel'>
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          // onToggleIncrease={this.onToggleIncrease}
          // onToggleRise={this.onToggleRise}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
