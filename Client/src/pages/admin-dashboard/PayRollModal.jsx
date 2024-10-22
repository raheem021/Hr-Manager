import React from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const PayrollModal = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <main>
        <h4 className="btn task-btn" onClick={handleShow}>
          Add to Payroll
        </h4>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add to Payroll</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Employee</Form.Label>
                <select name="" id="person" className="w-100 select-form">
                  <option className="select" value="select">
                    Select
                  </option>
                </select>
                <Form.Label>Base Salary</Form.Label>
                <Form.Control type="text" placeholder="N 0.00" autoFocus />
                <Form.Label>Allowance</Form.Label>
                <Form.Control type="text" placeholder="N 0.00" autoFocus />
                <Form.Label>Deductions</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="N 0.00"
                  autoFocus
                />{" "}
                <Form.Label>Tax</Form.Label>
                <Form.Control type="text" placeholder="0%" autoFocus />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer className="">
            <Button variant="secondary" onClick={handleClose} className="w-25">
              Cancel
            </Button>
            <Button variant="primary" onClick={handleClose} className="w-50">
              Add
            </Button>
          </Modal.Footer>
        </Modal>
      </main>

    
    </>
  );
};

export default PayrollModal
