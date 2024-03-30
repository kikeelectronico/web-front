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
      <SectionTitle title="Clave PGP pública" image="candado.png"/>
      <section className="contact-container">
        <div className="contact-card">
          <a className="contact-button" href="https://assets.enriquegomez.me/enrique_gomez.asc" target="_blank">Descargar</a>
        </div>
      </section> 
    </div>
  )
}