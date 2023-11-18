import React, { useState, useEffect } from "react";

import Navbar from './components/Navbar';
import Hello from './pages/Hello';
import Portfolio from "./pages/Portfolio";
import Footer from './components/Footer';

import Modal from 'react-modal';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import './App.css';

function App() {

  const [ri_alert, serRiAlert] = useState(false);

  useEffect(() => {
    if (window.location.hostname === "enrique.rinconingenieril.es") {
      serRiAlert(true)
    }
  }, [])

  return (
    <Router>
      <Navbar/>
      {/* <div className='page'> */}
        <Routes>
          <Route exact path="/" element={<Hello/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          
        </Routes>
      {/* </div> */}
      <Footer/>

      <Modal
        isOpen={ri_alert}
        style={customStyles}
        contentLabel="rimodal"
      >
        <h2>Hola</h2>
        <p>Tengo una nueva página web, visítala en: <a href="https://www.enriquegomez.me">www.enriquegomez.me</a></p>      
      </Modal>

    </Router>
  );
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default App;
