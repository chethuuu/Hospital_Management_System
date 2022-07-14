import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import '../node_modules/font-awesome/css/font-awesome.min.css';

import './Components/styles/Home.css'

import Home from './Components/Home/Home';
import Login from './Components/Home/Login';
import Navbar from './Components/Home/Navbar';
import Register from './Components/Home/Register';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Service from './Components/Home/Service';
import AdminHome from './Components/Admin/AdminHome';
import RegPatients from './Components/Admin/RegPatients';
import AllStaff from './Components/Admin/AllStaff';
import UpdateStaff from './Components/Admin/UpdateStaff';

const App = () => {

  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/admin" element={<AdminHome />} />
          <Route exact path="/reg_patient" element={<RegPatients />} />
          <Route exact path="/allstaff" element={<AllStaff />} />
          <Route exact path="/updatestaff/:id" element={<UpdateStaff />} />
          <Route exact path="/reg_patient" element={<RegPatients />} />
          <Route exact path="/reg_patient" element={<RegPatients />} />
          <Route exact path="/reg_patient" element={<RegPatients />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;