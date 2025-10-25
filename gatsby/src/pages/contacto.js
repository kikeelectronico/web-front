import React from "react";

import Layout from "../components/Layout"
import SectionTitle from "../components/SectionTitle"
import "./contact.css"

const Contact = () =>  {

  return (
    <Layout>
      <div className="page">
        <SectionTitle title="Contacto" image="chat.png"/>
        <section className="contact-container">
          <div className="contact-card">
            <h3>Puedes escribirme usando LinkedIn</h3>
            <a className="contact-button" href="https://www.linkedin.com/in/enrique-gomez-rodriguez-elec/" target="_blank" rel="noreferrer">Escríbeme</a>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default Contact

export const Head = () => <title>Enrique Gómez</title>