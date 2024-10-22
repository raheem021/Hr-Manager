import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import  Offcanvas  from "react-bootstrap/Offcanvas";
// ======================
import { sideBarLinks } from "../db";
import applogo from "../assets/Frame 1000003286.svg"
import arrowUp from "../assets/Vector.svg";
import arrowDown from "../assets/Vector (1).svg"
import { NavLink } from 'react-router-dom';
import"../style/AdminDashboard.css";


const Offcanvass =({ name, ...props})=>{
    const [show, setShow] =useState(false);

    const handleClose= ()=> setShow(false);
    const handleShow =()=> setShow(true);
    return(
        <>
        <main className="">
            <Button variant="primary" onClick={handleShow} className="me-2">
                {name}
            </Button>
            <Offcanvas show={show} onHide={handleClose} {...props} className="w-75">
                <Offcanvas.Body>
                <section className='d-flex flex-column gap-5 admin-dashboard-section'>
            <div className='d-flex gap-5 align-items-center'>
                <div className='d-flex gap-2 admin-dashboard-section-1-div-1'>
                <div>
                <img src={applogo} alt="Hr-logo" className='img-fluid' />
                </div>
                <div>
                    <h1 className='mb-0'>HR Manager</h1>
                    <p className=''>hrmanager@yahoo.com</p>
                </div>
                </div>
                <div>
                    <div>
                        <img src={arrowUp} alt="arrow-up-logo" />

                    </div>
                    <div>
                        <img src={arrowDown} alt="arrow-down-logo" className='pb-4' />
                    </div>

                </div>

            </div>
            {/*==================================*/}
            <div className='admin-dashboard-section-1-div-2'>
                <h3>MAIN MENU</h3>
                <div>
                    {sideBarLinks.map((sidebarLinks)=>{
                        const{id, path,Icon,name } =sidebarLinks;
                        return(
                            <section key={id} className=''>
                                <NavLink className={({isActive, isPending})=>
                                isPending? "pending" : isActive? "active":""}
                                to={path}
                                end>
                                    <div className='d-flex mb-'>
                                    <img src={Icon} alt={name} />
                                    <h6>{name}</h6>
                                    </div>

                                </NavLink>
                            </section>
                        );
                    })}
                </div>
                
                </div>
        </section>
                </Offcanvas.Body>
            </Offcanvas>
        </main>
        
        
        
        </>
    );

};


export default Offcanvass;