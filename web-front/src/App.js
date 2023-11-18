import React, { useState, useEffect } from "react";

import Navbar from './components/Navbar';
import Hello from './pages/Hello';
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
    <div className="App">
      <Navbar/>
      <div className='page'>
        <Routes>
          <Route exact path="/" element={<Hello/>}/>
          {/* <SectionTitle title="Proyectos de hardware" image="soldering.png"/>
          <Projects type="hardware" id="hardware"/>
          <SectionTitle title="Proyectos de software" image="software.png"/>
          <Projects type="software" id="software"/>
          <SectionTitle title="Otros proyectos" image="hand.png"/>
          <Projects type="contenido" id="others"/>
          <SectionTitle title="Formación" image="book.png"/>
          <Courses id="courses"/>
          <SectionTitle title="Entrevistas" image="mic.png"/>
          <Interviews id="interviews"/>
          <SectionTitle title="Contacto" image="chat.png"/>
          <Contact id="contact"/> */}
        </Routes>
      </div>
      <Footer/>

      <Modal
        isOpen={ri_alert}
        style={customStyles}
        contentLabel="rimodal"
      >
        <h2>Hola</h2>
        <p>Tengo una nueva página web, visítala en: <a href="https://www.enriquegomez.me">www.enriquegomez.me</a></p>      
      </Modal>

    </div>
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
