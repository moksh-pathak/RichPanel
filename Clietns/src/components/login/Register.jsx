import React from 'react';
import './Register.css'; // Make sure to replace with the actual path to your CSS file

const Register = () => {
  return (
    <div className="main">
      <p className="sign" align="center">
      Create Account
      </p>
      <form className="form1">
      <input className="un" type="text" align="center" placeholder="Enter Your Name" />
      <input className="un" type="email" align="center" placeholder="Enter Your Email" />
        <input className="pass" type="password" align="center" placeholder="Password" />
        <a className="submit" align="center">
          Sign Up
        </a>
        <p className="forgot" align="center">
           Already have account ?
          <a href="/login"> Sign In</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
