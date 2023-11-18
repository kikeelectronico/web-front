import React, { useState, useEffect } from "react";
import "./navbar.css"

export default function Navbar() {

  const [active, setActive] = useState("");
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    let slug = window.location.href.split("/")[3]
    setActive(slug.length === 0 ? "hello" : slug)

  }, [])

  const toggleMenu = () => {
    setMenu(!menu)
  }

  return (
    <nav className={"navbar " + (menu ? "navbar-show" : "")}>
      <div className="navbar-list">
        <div className="navbar-option close-nav-bar">
            <span onClick={() => {toggleMenu()}} >{menu ? "X" : "Menú"}</span>
        </div>
        <div className={"navbar-option " + (active === "hello" ? "navbar-option-active" : "")}>
          <a href="/">Hola</a>
        </div>
        <div className={"navbar-option " + (active === "portfolio" ? "navbar-option-active" : "")}>
          <a href="/portfolio">Portfolio</a>
        </div>
        <div className={"navbar-option " + (active === "blog" ? "navbar-option-active" : "")}>
          <a href="/blog">Blog</a>
        </div>
      </div>
    </nav>
  )
}