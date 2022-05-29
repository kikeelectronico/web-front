import React from "react";
import "./contact.css"

export default function Contact(props) {


  return (
    <section className="contact-container" id={props.id}>
      <div className="contact-card">
        <h3>Puedes escribirme usando LinkedIn</h3>
        <a className="contact-button" href="https://www.linkedin.com/in/enrique-gomez-rodriguez-elec/" target="_blank">Escríbeme</a>
      </div>
    </section> 
  )
}