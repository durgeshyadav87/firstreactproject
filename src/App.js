import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./frontend/pages/Home.js";
import About from "./frontend/pages/About.js";
import Contact from "./frontend/pages/Contact.js";
import Services from "./frontend/pages/Services.js";
import Login from "./frontend/pages/Login.js";
import Booking from "./frontend/pages/Booking.js";
//admin
import Dashboard from "./backend/pages/Dashboard.js";


const App = () => {

  return (
    <>
      <BrowserRouter>
        <div>
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/booking' element={<Booking />} />
          

          

          
 
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;