import React, { useState } from "react"

function Signup (props) {
  let [SignupMode, setSignupMode] = useState("signin")

  const changeSignupMode = () => {
    setSignupMode(SignupMode === "signin" ? "signup" : "signin")
  }

  const [Email, setEmail] = useState('');
 

  const handleSubmit = event => {
    
   alert("You are logged in with your email" +event.Email);
   event.preventDefault();
    
  };

  displayEmailHandler = (e) => {
    let updatedEmail = e.target.value;
    this.setState({email: updatedEmail});
      
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
              className="form-control mt-1" onChange={this.displayEmailHandler}
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
          <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
          <label class="form-check-label" for="flexCheckIndeterminate">
            Remember Me
           </label>
           </div>
           <div class="forgot-password text-right mt-2"><a href="#"> Forgot Password?</a></div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" style={"color:rgba"} onSubmit={e => this.displayEmailHandler(e)} className="btn btn-primary">
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