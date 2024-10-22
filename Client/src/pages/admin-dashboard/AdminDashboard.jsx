import React, { useEffect } from 'react';
import { sideBarLinks } from '../../db';
import applogo from "../../assets/Frame 1000003286.svg"
import arrowUp from "../../assets/Vector.svg";
import arrowDown from "../../assets/Vector (1).svg"
import { Outlet, useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "../../style/AdminDashboard.css"
import Navbar from '../../layout/Navbar';
import { useAuth } from '../../context/AuthContext';


const AdminDashboard = () => {
    const{user}=useAuth();
    const location= useLocation();
    useEffect
  return (
  <>
  <main className='container-fluid'>
    {/* main-section */}
    <section className='admin-dashboard-main'>
        {/* section-1 */}
        <section className='d-flex flex-column gap-5 admin-dashboard-section-1'>
            <div className='d-flex gap-5 align-items-center'>
                <div className='d-flex gap-2 admin-dashboard-section-1-div-1'>
                <div>
                <img src={applogo} alt="Hr-logo" className='img-fluid' />
                </div>
                <div>
                    <h1 className='mb-0'>HR Manager</h1>
                    <p className=''>{user && user ?.email}</p>
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
        {/* section-2 */}
        <section className='admin-dashboard-section-2'>
            <Navbar/>
<Outlet/>
        </section>
        
    </section>

  </main>
  </>
  );
};

export default AdminDashboard;
