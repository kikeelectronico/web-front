import React from "react";
import "./navbar.css"

export default function Navbar() {

  const highLight = () => {

  }

  return (
    <nav className="navbar">
      <div className="navbar-list">
        <div className="navbar-option navbar-option-active">
          <a href="#hello">Hola</a>
        </div>
        <div className="navbar-option">
          <a href="#hardware">Proyectos de hardware</a>
        </div>
        <div className="navbar-option">
          <a href="#software">Proyectos de software</a>
        </div>
        <div className="navbar-option">
          <a href="#others">Otros proyectos</a>
        </div>
        <div className="navbar-option">
          <a href="">Experiencia</a>
        </div>
      </div>
    </nav>
  )
}