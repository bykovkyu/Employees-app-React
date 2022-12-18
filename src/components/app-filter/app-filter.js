import cn from 'classnames';
import nextId from 'react-id-generator';

import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { name: 'all', label: 'Все сотрудники', colored: false },
    { name: 'rise', label: 'На повышение', colored: false },
    { name: 'moreThan1000', label: 'ЗП больше 1000$', colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = props.filter === name;
    const classes = cn('btn', {
      'btn-light': active,
      'btn-outline-light': !active,
    });
    const style = colored ? { color: 'red' } : null;
    return (
      <button
        type='button'
        className={classes}
        key={nextId()}
        onClick={() => {
          props.onFilterSelect(name);
        }}
        style={style}>
        {label}
      </button>
    );
  });

  return <div className='btn-group'>{buttons}</div>;
};

export default AppFilter;
