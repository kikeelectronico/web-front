import React from "react";
import "./contact.css"
import SectionTitle from "../components/SectionTitle"

export default function Contact() {

  return (
    <div className="page">
      <SectionTitle title="Contacto" image="chat.png"/>
      <section className="contact-container">
        <div className="contact-card">
          <h3>Puedes escribirme usando LinkedIn</h3>
          <a className="contact-button" href="https://www.linkedin.com/in/enrique-gomez-rodriguez-elec/" target="_blank">Escríbeme</a>
        </div>
      </section> 
    </div>
  )
}