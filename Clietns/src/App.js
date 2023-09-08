import React from 'react'
import './App.css';
import Login from './components/login/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/login/Register';
import Homepage from './components/login/Homepage';
import Sampler from './components/login/Sampler';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Sampler/>}/> 
      {/* <Route path='/' element={<Homepage/>}/> */}
      <Route path="/login" element={<Login />}/>
      <Route path='/register' element={<Register/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
