import './App.css';
import './index.css';
import NavBar from './Components/NavBar/NavBar';
import AddEmployee from './Components/AddEmployee/AddEmployee';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeeList from './Components/EmployeeList/EmployeeList';

function App() {
  return (
    <>
    <NavBar />
    <BrowserRouter>
       <Routes>
          <Route  index  element={<EmployeeList />} />
          <Route  path='/'  element={<EmployeeList />} />
          <Route  path='/EmployeeList'  element={<EmployeeList />} />
          <Route  path='/AddEmployee'  element={<AddEmployee />} />
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
