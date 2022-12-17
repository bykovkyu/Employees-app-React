import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp }) => {
  const elements = data.map((empl) => {
    const { id, ...emplProps } = empl;
    return (
      <EmployeesListItem
        key={id}
        {...emplProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        // onToggleProp={(prop) => onToggleProp(id, prop)}
      />
    );
  });

  return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;

/* const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleRise }) => {
  const elements = data.map((empl) => {
    const { id, ...emplProps } = empl;
    return (
      <EmployeesListItem
        key={id}
        {...emplProps}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
      />
    );
  });

  return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
 */
