import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete }) => {
  const elements = data.map((empl) => {
    const { id, ...emplProps } = empl;
    return (
      <EmployeesListItem
        key={id}
        {...emplProps}
        onDelete={() => onDelete(id)}
      />
    );
  });

  return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
