import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Students from './Students';
import AddStudents from './AddStudent';
import '../styles/Home.scss';

const Home = () => { 
  return (
    <>
    <Router>
      <nav>
        <ul className='nav-bar'>
          <li>Home</li>
          <Route path="/about" element={<About />} <li>Students</li>/>
          <li>Add Students</li>
        </ul>
      </nav>
      </Router>
        <h1 className='welcome-title'>Welcome to Monster University</h1>
       
     
     
     </>
   
  );
};

export default Home;
