import React, { useState } from 'react';
import './Login.css'; // Make sure to replace with the actual path to your CSS file
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post('http://localhost:5000/login', {
            username,
            password,
          });
    
          console.log('Login response:', response.data);
          
          // Handle successful login (e.g., redirect to dashboard)
          // For this example, you can show a success message or redirect the user
    
        } catch (error) {
          console.error('Error logging in:', error);
          // Handle login failure (e.g., show an error message)
        }
      };
  return (
    <div className="main">
      <div className='back'>
        <p className="sign" align="center">
          Login to your account
        </p>
        <form className="form1" onSubmit={handleSubmit}>
          <input
            className="un"
            type="text"
            align="center"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="pass"
            type="password"
            align="center"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="submit" align="center" type="submit">
            Login
          </button>
          <p className="forgot" align="center">
            Do not have an Account? <a href="/register">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
