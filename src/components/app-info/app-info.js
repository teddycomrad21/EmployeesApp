
import './app-info.css';

const AppInfo = ({ employeeAmount, increasedAmount }) => {
    return (
        <div className="app-info">
            <h1>Учёт сотрудников в компании GlobalLogic</h1>
            <h2>Общее число сотрудников: {employeeAmount}</h2>
            <h2>Премию получат: {increasedAmount}</h2>
            <p>Изменение 1 для теста commit squash...</p>
        </div>
    );
}

export default AppInfo;