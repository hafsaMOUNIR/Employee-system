import React ,{useState} from 'react';
import EmployeeService from '../../services/EmployeeService';
import './AddEmployee.css';

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id : "",
    firstName : "",
    lastName : "",
    email  : "",
  }); 
  const handelChange = e =>{
    const value = e.target.value;
    setEmployee({...employee,[e.target.name] : value});
  };
  const saveEmployee = (e) =>{
    e.preventDefault();
    EmployeeService.saveEmployee(employee).then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    })
  }
  return (
    <div className="add-container flex max-w-2xl mx-auto shadow border-b">
        <div className='space px-8 py-8'>
        <div>
            <h1 className='add-header'>Ajouter un nouveau employé</h1>
        </div>
        <div className="form-item items-center justify-center h-14 w-full my-4">
            <label className="label block text-gray-600 text-sm font-normal">
                Prénom
            </label>
            <input 
            type="text"
            name='firstName'
            value={employee.firstName} 
            onChange = {(e) =>handelChange(e)}
            className="input h-10 w-96 border mt-2 px-2 py-2"></input>

        </div>
        <div className="form-item items-center justify-center h-14 w-full my-4">
            <label className="label  block text-gray-600 text-sm font-normal">
                Nom
            </label>
            <input 
            type="text" 
            name='lastName'
            value={employee.lastName}
            onChange = {(e) =>handelChange(e)}
            className="input h-10 w-96 border mt-2 px-2 py-2"></input>
            
        </div>
        <div className="form-item items-center justify-center h-14 w-full my-4">
            <label className="label block text-gray-600 text-sm font-normal">
                Email
            </label>
            <input 
            type="email" 
            name='email'
            value={employee.email}
            onChange = {(e) =>handelChange(e)}
            className="input h-10 w-96 border mt-2 px-2 py-2"></input>
            
        </div>
        <div className="form-item items-center justify-center h-14 w-full my-4">
            <div className='button-container'>
                <button onClick={saveEmployee}>
                    <span>Enregistrer</span>
                </button>
                <button>
                    <span>Annuler</span>
                </button>
            </div>
            
        </div>
        </div>
        
    </div>
    
  )
}
export default AddEmployee;