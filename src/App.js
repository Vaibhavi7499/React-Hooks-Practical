import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './component/EmployeeList';
import StudentList from './component/StudentList';
import Layout from './Layout';
import CustomerList from './component/CustomerList';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Layout/>
      <Routes>
        <Route path='/emplist' element={<EmployeeList/>}/>
        <Route path='/studentlist' element={<StudentList/>}/>
        <Route path='/customerlist' element={<CustomerList/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
