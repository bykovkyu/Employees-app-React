import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data }) => {
  const elements = data.map((empl) => {
    const { id, ...emplProps } = empl;
    return (
      <EmployeesListItem
        key={id}
        {...emplProps}
      />
    );
    /*  return (
      <EmployeesListItem
        name={empl.name}
        salary={empl.salary}
      />
    ); */
  });

  return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
