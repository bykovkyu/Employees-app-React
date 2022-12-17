import './app-info.css';

const AppInfo = ({ totalEmployees, totalIncreased }) => {
  return (
    <div className='app-info'>
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {totalEmployees}</h2>
      <h2>Премию получат: {totalIncreased}</h2>
    </div>
  );
};

export default AppInfo;
