import React from 'react'

export const Employee = ({employee}) => {
  return (
    <tr key={employee.id}>
                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>
                            {employee.firstName}
                        </div>
                    </td>
                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>
                            {employee.lastName}
                        </div>
                    </td>
                    <td className='text-left px-6 py-4 whitespace-nowrap'>
                        <div className='text-sm text-gray-500'>
                            {employee.email}
                        </div>
                    </td>
                    <td className='text-left px-6 py-4 whitespace-nowrap' >
                        <a href='#' className='action text-indigo-600  '>
                            Modifier
                        </a> 
                        <a href='#' className=' text-indigo-600 text-left hover:text-indigo-800 px-4'>
                            Supprimer
                        </a>
                    </td>
                  </tr>
  )
}
