import React from "react";
import Hrlogo from "../assets/Frame 1000003286.svg";
import { Link } from "react-router-dom";

const Reset = () => {
  return (
    <>
      <main className="sign-in d-flex justify-content-center align-items-center">
        <div className="sign-in-body p-5">
          <div className="d-flex justify-content-center sign-in-header">
            <img src={Hrlogo} alt="Hr-logo" />
            <h1>HR Manager</h1>
          </div>

          <h2>Reset password</h2>
          <form>
            <div className="d-flex flex-column"></div>
            <label htmlFor="Reset-Password">Password</label>
            <input
              type="Reset-password"
              name=""
              id=""
              placeholder="Enter New Password"
            />
            <label htmlFor="Reset-password">Confirm Password</label>
            <input
              type="Reset-password"
              name=""
              id=""
              placeholder="confirm password"
            />

            <button className="sign-in-btn-1">
              <Link
                className="text-decoration-none text-white"
                to={"/auth/reset"}
              >
                Reset Pasword
              </Link>
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Reset;
