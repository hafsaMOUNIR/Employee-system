import React, {useEffect , useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EmployeeService from '../../services/EmployeeService';
import { Employee } from '../Employee';
import './EmployeeList.css'

const EmployeeList = () => {
  
  const navigate = useNavigate();  

  const  [Employees, setEmployees] = useState(null);
  const [Loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await EmployeeService.getEmployee();
        setEmployees(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);                 
    };
    fetchData();
  }, [])

  const deleteEmployee = (e,id) => {
    e.preventDefault();
    EmployeeService.deleteEmployee(id).then((res) =>{
        if(Employees){
            setEmployees((prevElement) => {
                return prevElement.filter((employee) => employee.id !== id);
            })
        }
    }
  )}
  
  return (
    <div className='container mx-auto my-8'>
        <div className='h-12 my-2'>
            <button 
            onClick={()=> navigate("/AddEmployee") }
            className='add-button rounded text-white px-6 py-2 font-semibold'>
                Ajouter un employé
            </button>
        </div>
        <div className='body-content '>
            <table className='min-w-full'>
                <thead className='bg-gray-50'>
                    <tr >
                        <th className='text-left text-sm font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Prénom
                        </th>
                        <th className='text-left text-sm font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Nom
                        </th>
                        <th className='text-left text-sm font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Email
                        </th>
                        <th className='text-left text-sm font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Actions
                        </th>
                    </tr>
                </thead>
                {! Loading && (
                <tbody >
                    {Employees.map(employee =>
                       <Employee employee = {employee} deleteEmployee = {deleteEmployee} key={employee.id}></Employee>
                    )}
                </tbody>
                )}
            </table>
        </div>
    </div>
  )
}
export default EmployeeList;