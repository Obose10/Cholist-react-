import React from 'react';
import { Routes, Route } from "react-router-dom";

import './App.css';
import SideNavBar from './components/Navigation/SideNavBar';
import TopNavBar from './components/Navigation/TopNavBar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services'

function App() {
  return (
    <div className='App'>
     <TopNavBar />
     <div className='partition'>
      <div className="sideNav">
        <SideNavBar />
      </div>
      <div className="mainNav">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
          </Routes>
      </div>
     </div>

     
    </div>
  
    
  );
}

export default App;
