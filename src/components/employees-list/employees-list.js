import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleProp, onValueChange }) => {
  const elements = data.map((empl) => {
    const { id, ...emplProps } = empl;
    return (
      <EmployeesListItem
        key={id}
        {...emplProps}
        onDelete={() => onDelete(id)}
        onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))}
        onValueChange={(e) => onValueChange(id, e.currentTarget.value)}
      />
    );
  });

  return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
