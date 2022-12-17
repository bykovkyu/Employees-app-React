import cn from 'classnames';
import nextId from 'react-id-generator';

import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники' },
    { name: 'rise', label: 'На повышение' },
    { name: 'moreThan1000', label: 'ЗП больше 1000$' },
  ];

  const buttons = buttonsData.map(({ name, label }) => {
    const active = props.filter === name;
    const classes = cn('btn', {
      'btn-light': active,
      'btn-outline-light': !active,
    });
    return (
      <button
        type='button'
        className={classes}
        key={nextId()}
        onClick={() => {
          props.onFilterSelect(name);
        }}>
        {label}
      </button>
    );
  });

  return <div className='btn-group'>{buttons}</div>;
};

export default AppFilter;
