import React, { useEffect, useState } from "react";
import HRl from "../assets/Frame 1000003286.svg";
import "../style/Signin.css";
import {  Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { logInSchema } from "../lib/Validation";

const SignIn = () => {
  
  const [isClicked, setIsClicked]=useState(false);
  const navigate=useNavigate()

  const{
    register,
    handleSubmit,
    formState:{errors, isSubmitting},
  }= useForm({resolver:yupResolver(logInSchema),});
  useEffect(()=>{
    document.title="sign In";
  });
  
  async function handleSignIn(data){
    setIsClicked(true)
    try{
      const req= await fetch("http://localhost:1313/api/auth/signin",{
        method:"POST", headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
          
        })
        const res= await req.json();
        console.log(res);
        if(!res.success){
          toast.error(res.errMsg)
        }
        if(res.success){
          toast.success(res.message)
          localStorage.setItem("hr-token",res.user.token)
          if(res.user.role==="super-admin"||res.user.role==="admin"){
            navigate("/admin-dashboard")

          }else{
            navigate("/employee-dashboard")
          }
        }
      

    } catch(error){

    }
  finally{
    setIsClicked(false)
  }
    
  }
  const btnText=isClicked ? "loading":"sign In"
  return (
    <>
      <main className="sign-in d-flex justify-content-center align-items-center">
        <div className="sign-in-body p-5">
          <div className="d-flex justify-content-center sign-in-header">
            <img src={HRl} alt="hr-img" />
            <h1>HR Manager</h1>
          </div>
          <h2 className="text-center-1">
            Welcome to HR Manager - Where Creativity Meets Opportunity!
          </h2>
          <form onSubmit = {handleSubmit(handleSignIn)}>
            <div className="d-flex flex-column">
              <div>
                <label className="write" htmlFor="">
                  Email
                </label>
                <input type="email" name="" id="" {...register("email")}/>
                <p className="text-danger">{errors.email?.message}</p>
              </div>
              <div className="d-flex justify-content-between">
                <label className="write" htmlFor="">
                  Password 
                </label>
                <Link to={"/auth/forgot"} className="text-decoration-none" id="forgot-pass">forgot Password?</Link>
              </div>
              <div>
                <input type="password" name="" id="" {...register("password")}/>
                <p className="text-danger">{errors.password?.message}</p>
              </div>
            </div>

            <button className="sign-in-btn-1" variant="primary" type="submit" disabled={isSubmitting}>{btnText}</button>
            
          </form>
        </div>
      </main>
      <Outlet/>
    </>
  );
}
  
  



export default SignIn;
