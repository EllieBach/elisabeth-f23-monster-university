import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Students from './Students';
import AddStudents from './AddStudent';
import '../styles/Home.scss';

const Home = () => {
  return (
    <>
    
        <div>
          <h1 className='welcome-title'>Welcome to Monster University</h1>
          </div>
    </>
  );
};

export default Home;
