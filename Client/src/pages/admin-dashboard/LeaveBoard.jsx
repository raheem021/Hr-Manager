import React from 'react';
import {leaveBoard} from "../../taskboard";
import {leavelist} from "../../taskboard";
import Table from 'react-bootstrap/Table';
import "../../style/Leaveboard.css"


const LeaveBoard = () => {
  return (
    <>
    <main className='leaveboard-main'>
    <div className="pt-4 ">
          <div className="">
            <h1 className="leaveboard-h1">Taskboard</h1>
            <div className="d-flex  leaveboard ">
              <h3 className="taskboard-h3">Dashboard/Leaveboard</h3>
            </div>
          </div>
          <div className="d-flex gap-3 justify-content-between leave-summary">
            {leavelist.map((taskboard) => {
              const { id, name, number } = taskboard;
              return (
                <div
                  key={id}
                  className="leave-summary-div-1 "
                >
                  <div className=" summary-task-1">
                    <h4 className="summary-task-name text-center">{name}</h4>
                    <h1 className="summary-task-number text-center">{number}</h1>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
        <div className="admin-summary-2">
            
          <Table responsive = "lg">
            <thead className="">
              <tr className="task-head">
                <th className="bg-light">Name</th>
                <th className="bg-light">Leave Type</th>
                <th className="bg-light">Duration</th>
                <th className="bg-light">Days</th>
                <th className="bg-light">Status</th>
                <th className="bg-light"></th>
              </tr>
            </thead>
            <tbody>
              {leaveBoard.map((leaveBoard) => {
                const { id, Image, name, leavetype, Start, End, Days, Status, dot } = leaveBoard;
                return (
                  <tr key={id} className="">
                    <td className="d-flex align-items-center gap-3">
                      <img src={Image} alt="leave-img" />{name}
                    </td>
                    <td className="pt-3">{leavetype}</td>
                    <td className="pt-1">
                     <p id="start">{Start}</p> 
                     <p id="end">{End}</p>
                    </td>
                    <td className="pt-3">{Days}</td>
                    <td className="pt-3">{Status}</td>
                    <td className="pt-3">{dot}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        
    </main>
    </>
  );
};

export default LeaveBoard
