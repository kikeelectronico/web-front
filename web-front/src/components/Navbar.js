import React, { useState, useEffect } from "react";
import "./navbar.css"
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

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
        <div className={"navbar-option close-nav-bar " + (menu ? "" : "open-nav-bar")}>
            <span onClick={() => {toggleMenu()}} >{menu ? <CloseIcon/> : <MenuIcon/>}</span>
        </div>
        <div className={"navbar-option " + (active === "hello" ? "navbar-option-active" : "")}>
          <a href="/">Hola</a>
        </div>
        <div className={"navbar-option " + (active === "portfolio" ? "navbar-option-active" : "")}>
          <a href="/portfolio">Portfolio</a>
        </div>
        <div className={"navbar-option " + (active === "conoceme" ? "navbar-option-active" : "")}>
          <a href="/conoceme">Conóceme</a>
        </div>
        <div className={"navbar-option " + (active === "blog" ? "navbar-option-active" : "")}>
          <a href="/blog">Blog</a>
        </div>
        <div className={"navbar-option " + (active === "contacto" ? "navbar-option-active" : "")}>
          <a href="/contacto">Contacto</a>
        </div>
      </div>
    </nav>
  )
}