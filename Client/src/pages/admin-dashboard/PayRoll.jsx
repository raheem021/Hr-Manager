import React from 'react';
import { payRollgraph, payRollTable } from '../../taskboard';
import Table from "react-bootstrap/Table";
import { useState } from 'react';
import "../../style/PayRoll.css"
import PayRollModal from "./PayrollModal";


const PayRoll = () => {
  const [show, setShow] = useState(false);
  return (
    <> <main className="payroll-admin">
    <div className="pt-4 ">
      <div className="">
        <h1 className="taskboard-h1">Payroll</h1>
        <div className="d-flex justify-content-between payroll ">
          <h3 className="taskboard-h3">Dashboard/Payroll</h3>
          <PayRollModal/>
        </div>
      </div>
      <div className="d-flex gap-2 justify-content-between  payroll-summary" responsive>
        {payRollgraph.map((payRollgraph) => {
          const { id, name, number, graph, time } = payRollgraph;
          return (
            <div
              key={id}
              className="container  payroll-summary-div-1 "
            >
              <div className=" summary-payroll-1">
                <h6 className="summary-payroll-name">{name}</h6>
                <h2 className="summary-payroll-number">{number}</h2>
                <p>{time}</p>
              </div>
              <div className="">
                <img src={graph} alt="" className="summary-payroll-img" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
    <div className="admin-summary-2">
      <Table responsive="lg">
        <thead className="">
          <tr className="bg-light">
            <th className="payroll-head bg-light">Name</th>
            <th className="payroll-head bg-light">Salary</th>
            <th className="payroll-head bg-light">Allowance</th>
            <th className="payroll-head bg-light">Deductions</th>
            <th className="payroll-head bg-light">Tax</th>
            <th className="payroll-head bg-light">Net Salary</th>
          </tr>
        </thead>
        <tbody>
          {payRollTable.map((payRollTable) => {
            const {
              id,
              Image,
              name,
              salary,
              allowance,
              deductions,
              tax,
              netSalary,
            } = payRollTable;
            return (
              <tr key={id} className="">
                
                  <td className="d-flex align-items-center gap-3">
                    <img src={Image} alt="leave-img" />    {name}
                  </td>
                  {/* <td className="table-input pt-3">{name}</td> */}
                
                <td className="pt-3">{salary}</td>
                <td className="pt-3">{allowance}</td>
                <td className="pt-3">{deductions}</td>
                <td className="pt-3">{tax}</td>
                <td className="pt-3">{netSalary}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  </main>
   
    </>
  )
}

export default PayRoll
