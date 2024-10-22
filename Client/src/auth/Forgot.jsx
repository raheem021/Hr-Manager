import React from 'react'
import Hrimg from "../assets/Frame 1000003286.svg"
import { Link } from 'react-router-dom'

const forgot = () => {
  return (
  <>
  <main className='sign-in d-flex justify-content-center align-items-center'>
    <div className='sign-in-body p-5'>
        <div className='d-flex justify-content-center sign-in-header'>
            <img src={Hrimg} alt="hr-img" />
            <h1>HR Manager</h1>

        </div>

        <h2>Forgot Password</h2>
        <form>
            <div className='d-flex flex-column'>

            </div>
            <label htmlFor="forgot-password"></label>
            <input type="text" name="" id="" placeholder='Enter your email address to reset your password.' />
            <button className="sign-in-btn-1"><Link className='text-decoration-none text-white' to={"/auth/reset"}>Reset Password</Link> </button>
        </form>

    </div>

  </main>
  
  
  </>
  )
}

export default forgot
