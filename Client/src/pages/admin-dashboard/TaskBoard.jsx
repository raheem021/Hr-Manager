import React from "react";
import { taskboard } from "../../taskboard";
import { useState } from "react";
import { adminTables } from "../../db";
import Button from "react-bootstrap/Button";
import { Form } from "react-router-dom";
import Modal  from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import "../../style/TaskBoard.css";
import plus from "../../assets/plus.svg";

const TaskBoard = () => {
  const [show, setShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <main className="taskboard-admin">
        <div className="pt-4 ">
          <div className="">
            <h1 className="taskboard-h1">Taskboard</h1>
            <div className="d-flex justify-content-between taskboard ">
              <h3 className="taskboard-h3">Dashboard/Taskboard</h3>
              <h4 className="btn task-btn" onClick={handleShow}>
                <img src={plus} alt="plus" id="plus" /> New Task
              </h4>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Create New Task</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Task Title</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>Task Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                      </Form.Group>
                      <Form.Label>Assigns Person</Form.Label>
                      <select name="" id="person" className="w-100 select-form">
                        <option className="select" value="select">
                          Select
                        </option>
                      </select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label className="d-flex justify-content-between flex-column">
                        <p className="d-flex flex-column">
                          Start Date <input type="date" />
                        </p>
                        <p className="d-flex flex-column">
                          End date <input type="date" />
                        </p>
                      </Form.Label>
                    </Form.Group>

                    <Form.Label>Task Status</Form.Label>
                    <select name="" id="status" className="w-100 select-form">
                      <option className="select" value="select">
                        Select
                      </option>
                    </select>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                    <Modal
                      size="lg"
                      show={lgShow}
                      onHide={() => setLgShow(false)}
                      aria-labelledby="example-modal-sizes-title-lg"
                    >
                      <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                          Save
                        </Modal.Title>
                      </Modal.Header>
                      <Modal.Body>check this out</Modal.Body>
                    </Modal>
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-between task-summary">
            {taskboard.map((taskboard) => {
              const { id, name, number, Image } = taskboard;
              return (
                <div
                  key={id}
                  className=" gap-5 d-flex container justify-content-between task-summary-div-1 "
                >
                  <div className=" summary-task-1">
                    <h4 className="summary-task-name">{name}</h4>
                    <h1 className="summary-task-number">{number}</h1>
                  </div>
                  <div className="">
                    <img src={Image} alt="" className="summary-task-img" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="admin-summary-2">
          <div className="container">
            <h2 className="admin-summary-taskboard">Taskboard</h2>
          </div>
          <Table responsive="lg">
            <thead className="">
              <tr className="task-head">
                <th className=" hash container">#</th>
                <th className="">Task</th>
                <th>Team</th>
                <th>Duration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {adminTables.map((adminTables) => {
                const { id, Task, Team, Action, Start, End } = adminTables;
                return (
                  <tr key={id} className="">
                    <td className="check-input">
                      <input
                        type="checkbox"
                        name=""
                        id="check-box"
                        className="container"
                      />
                    </td>
                    <td className="table-input pt-3">{Task}</td>
                    <td>
                      <img src={Team} alt="" />
                    </td>
                    <td className="pt-1">
                      <p id="start">{Start}</p>
                      <p id="end">{End}</p>
                    </td>
                    <td className="">{Action}</td>
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

export default TaskBoard;
