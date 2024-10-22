import React, { useContext } from 'react';
import { useState } from 'react';
import ladyProfilePic from "../assets/lady.svg";
import messageImg from "../assets/messageIcon.svg";
import searchImg from "../assets/searchIcon.svg";
import notificationImg from "../assets/Bell.svg";
import arrowDown from "../assets/arrowDown.svg";
import"../style/Navbar.css";
import AuthDropDown from '../component/AuthDropDown';
import Offcanvass  from '../component/OffCanvas';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
    const [isTrue, setIsTrue]=useState(false);
    const {user,setUser}= useContext(AuthContext)
    const navigate =useNavigate()
    function handleReveal(){
        isTrue ? setIsTrue(false) : setIsTrue(true);
    }
    const logout=()=>{
        // setUser(null)
        localStorage.removeItem("hr-token");
        navigate("/auth/signin")
    };
    
  return (
    <>
    <nav className='d-flex justify-content-between position-relative'>
        <div className='d-md-none'>
            {["start"].map((placement, idx)=>(
                <Offcanvass key={idx} placement={placement} name={placement}/>
            ))}
            </div>
        <form className='nav-form position-relative'>
            <input type="search" name='' id='' placeholder='Search'/>
            <img className='position-absolute top-50 end-0 translate-middle-y pe-2' src={searchImg} alt="searching-image" />
        </form>
        <div className='nav-div d-flex gap-4 align-items-center '>
            <div>
                <img src={notificationImg} alt="notification-image" className='d-none d-md-block' />
            </div>
            <div className='d-flex gap-2 align-items-center'>
                <div>
                <img src={ladyProfilePic} alt="ladyProfilePic" className='d-none d-md-block' />
            </div>
                <h4 className='d-none d-md-block'>Raheem Raheem</h4>
                <img  onClick={handleReveal} role="button" src={arrowDown} alt="arrowDown-image" className='mb-1 d-none d-md-b lock' />
                </div>
                    
                </div>
    
                </nav>
                <div className='position-absolute end-0 me-5 pe-1'>
                    {isTrue && <AuthDropDown/>}

                </div>
                
            
    
    
    </>
  );
};

export default Navbar;
