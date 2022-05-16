import React from "react";
import "./navbar.css"

export default function Navbar() {

  return (
    <div className="navbar">
      <div className="navbar-list">
        <div className="navbar-option">
          Hola
        </div>
        <div className="navbar-option">
          Proyectos de hardware
        </div>
        <div className="navbar-option">
          Otros proyectos
        </div>
        <div className="navbar-option">
          Experiencia
        </div>
      </div>
    </div>
  )
}