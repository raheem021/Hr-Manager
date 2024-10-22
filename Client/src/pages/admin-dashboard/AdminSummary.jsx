import React from 'react'
import { employee } from '../../db';
import { adminTables } from '../../db';
import Table from "react-bootstrap/Table";
import "../../style/AdminSummary.css";


const AdminSummary = () => {
  return (
   <>
   <main className='admin-summary'>
    <div className='pt-4 admin-summary-1'>
      <div className=''>
        <h1 className='h1'>Dashboard</h1>



      </div>

      <div className='d-flex gap-2 justify-content-between admin-summary-employee'>
        {employee.map((employee)=>{
          const {id, name, number, image}=employee;
          return(
            <div key={id} className='gap-4 d-flex justify-content-between admin-summary-task'>

              <div className='admin-summary-task-1'>
                <h4>{name}</h4>
                <h1>{number}</h1>

              </div>
              <div className='d-flex'>
                <img src={image} alt="" />

              </div>
            </div>
          );
          
          
          
          })}

      </div>

    </div>
    <div className='admin-summary-2'>
      <div className='container'>
        <h2 className='admin-summary-taskboard'>Taskboard</h2>

      </div>

      <table responsive="lg">
        <thead className=''>
          <tr className='task-head'>
            <th className='hash container'>#</th>
            <th className=''>Task</th>
            <th>Team</th>
            <th>Duration</th>
            <th>Action</th>

          </tr>

        </thead>
        <tbody>
          {adminTables.map((AdminTables)=>{
            const {id, Task,Team, Action, Start, End}= AdminTables;
            return(
              <tr key={id} className=''>
                <td className='check-input'>
                  <input type="checkbox" name='' id='check-box' className='container' />
                </td>
                <td className='table-input pt-3'>{Task}

                </td>
                <td>
                <img src={Team} alt="" />
                </td>
                <td className='pt-1'>
                  <p id='start'>{Start}</p>
                  <p id='end'>{End}</p>

                </td>
                <td className=''>{Action}</td>

              </tr>
            )
          })}
        </tbody>

      </table>

    </div>
    
        
   </main>
   
   </>
  );
};

export default AdminSummary
