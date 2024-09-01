import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage1';
import LoginFormx from './components/Loginform'; // Adjust path as needed
import Myform from './components/Myform';
import Tanzeer from './components/Tanzeer';
import Messcard from './components/Messcard';
import UserContext from './utils/UserContext';
import { useState } from 'react';


const App = () => {

  const [mealRejected,setMealRejected]=useState(false);
  return (
    <Router>
    <UserContext.Provider value={{rejectAMeal:mealRejected,setMealRejected}}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginFormx />} />
        <Route path="/create-account" element={<Myform />} />
        <Route path="/signin" element={<LoginFormx />} />
        <Route path="/login-button" element={<Tanzeer />} />
        <Route path="/messcard" element={<Messcard/>}/>
      </Routes>
    </UserContext.Provider>
    </Router>
  );
};

export default App;
