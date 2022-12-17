import cn from 'classnames';

import './employees-list-item.css';

const EmployeesListItem = (props) => {
  const { name, salary, increase, rise, onDelete, onToggleProp } = props;
  let classNames = cn('list-group-item', 'd-flex', 'justify-content-between', {
    increase,
    like: rise,
  });

  return (
    <li className={classNames}>
      <span
        className='list-group-item-label'
        data-toggle='rise'
        onClick={onToggleProp}>
        {/* onClick={() => onToggleProp('rise')}> */}
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
          data-toggle='increase'
          onClick={onToggleProp}
          // onClick={() => onToggleProp('increase')}
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
};

export default EmployeesListItem;

/* const EmployeesListItem = (props) => {
  const { name, salary, increase, rise, onDelete, onToggleIncrease, onToggleRise } = props;
  let classNames = cn('list-group-item', 'd-flex', 'justify-content-between', {
    increase,
    like: rise,
  });

  return (
    <li className={classNames}>
      <span
        className='list-group-item-label'
        onClick={onToggleRise}>
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
          onClick={onToggleIncrease}
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
};

export default EmployeesListItem; */
