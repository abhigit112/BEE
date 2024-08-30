// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage1';
import LoginFormx from './components/Loginform'; // Adjust path as needed
import Myform from './components/Myform';
// import Redirect from './components/Redirection';
// import { createBrowserRouter } from "react-router-dom";
import Tanzeer from './components/Tanzeer';

// import Verification from './components/verify'
// import Login from './components/Login'; 
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginFormx />} />
        <Route path="/create-account" element={<Myform />} />
        {/* <Route path="/google-logo" element={<Login />} /> */}
        <Route path="/signin" element={<LoginFormx />} />
        <Route path="/login-button" element={<Tanzeer />} />
        

        {/* <Route path="/login-button" element={<Verification/>} /> */}


        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
