import React from 'react'
import './index.css'; 
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Signin from './pages/Signin';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/AboutUs' element={<AboutUs />} />
          <Route path='/Courses' element={<Courses />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Blog' element={<Blog />} />
          <Route path='/Signin' element={<Signin />} />
        </Routes>
   
    </div>
  )
}

export default App