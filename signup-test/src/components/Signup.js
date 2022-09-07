import React, { useState } from "react";

function Signup (props) {
  const [SignupMode, setSignupMode] = useState("signin")
  const [userEmail, setUserEmail] = useState("User")
  
  const changeSignupMode = () => {
    setSignupMode(SignupMode === "signin" ? "signup" : "signin")
  }

  const handleSubmit = () => {
    alert(userEmail + " logged in successfully");
  }
  
 
  if (SignupMode === "signin") {
    return (
      <div className="Login-form-container">
      <form className="Login-form">
        <div className="Login-form-content">
          <h3 className="Login-form-title">ADMIN LOGIN</h3> 
          <div className="text-center">
            Not registered yet?{" "}
            <span className="link-primary" onClick={changeSignupMode}>
              Sign Up
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control mt-1" 
              placeholder="Enter email"              
              
            />
            
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
          <label className="form-check-label" htmlFor="flexCheckIndeterminate">
            Remember Me
           </label>
           </div>
           <div className="forgot-password text-right mt-2"><a href="#"> Forgot Password?</a></div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit"  styles={"color:rgba"} className="btn btn-primary" onClick={handleSubmit()} >
              Login
            </button>
          </div>         
        </div>
      </form>
    </div>
  )
  } else {

  return (
    <div className="Login-form-container">
      <form className="Login-form">
        <div className="Login-form-content">
          <h3 className="Login-form-title">Sign Up</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="link-primary" onClick={changeSignupMode}>
              Login
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
            />
          </div>
          <div className="form-group mt-3">
            <label>Username</label>
            <input
              type="name"
              className="form-control mt-1"
              placeholder="my name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="form-group mt-3">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          
        </div>
      </form>
    </div>
  )
  }
}

export default Signup;