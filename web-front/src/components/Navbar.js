import React, { useState, useEffect } from "react";
import "./navbar.css"

export default function Navbar() {

  const [active, setActive] = useState("hello");

  useEffect(() => {
    highLight();
  }, [])

  const highLight = () => {

    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      const scrollY = window.pageYOffset;
      sections.forEach(section => {
        const section_height = section.offsetHeight;
        const section_top = section.offsetTop - 100;
        if(scrollY > section_top && scrollY < section_top + section_height) {
          const section_id = section.getAttribute('id')
          setActive(section_id)
        }

      })

    })
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