import cn from 'classnames';

import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: this.props.increase,
      rise: this.props.rise,
    };
  }

  onIncrease = () => {
    this.setState(({ increase }) => ({ increase: !increase }));
  };

  onRise = () => {
    this.setState(({ rise }) => ({ rise: !rise }));
  };

  render() {
    const { name, salary, onDelete } = this.props;
    const { increase, rise } = this.state;
    let classNames = cn('list-group-item', 'd-flex', 'justify-content-between', {
      increase,
      like: rise,
    });

    return (
      <li className={classNames}>
        <span
          className='list-group-item-label'
          onClick={this.onRise}>
          {name}
        </span>
        <input
          type='text'
          className='list-group-item-input'
          defaultValue={salary + '$'}
        />
        <div className='d-flex justify-content-center align-items-center'>
          <button
            type='button'
            onClick={this.onIncrease}
            className='btn-cookie btn-sm '>
            <i className='fas fa-cookie'></i>
          </button>

          <button
            type='button'
            className='btn-trash btn-sm '
            onClick={onDelete}>
            <i className='fas fa-trash'></i>
          </button>
          <i className='fas fa-star'></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
