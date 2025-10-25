import React from "react";
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import "./hello.css"


// const API = process.env.REACT_APP_API_URL;

const Index = () => {

  return (
    <Layout>
      <div className="page">
        <div className="hello-section">
          <div className="hello-container">
            <div className="hello-column" style={{paddingBottom: 0}}>
              <StaticImage
                src="../images/enrique-profile.png"
                alt="Foto de perfil de Enrique Gómez"
                className="hello-profile"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
            <div className="hello-column" style={{flex: 2}}>
              <div className="hello-content">
                <h2>Electro hola</h2>
                <p>
                  Soy Enrique, ingeniero electrónico enamorado del diseño de hardware que mejora la sociedad.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="about-container">
              <div className="about-content">
                <p>
                  Me gustan los retos ingenieriles, especialmente los que están relacionados con el diseño, fabricación y testeo de hardware. Si se trata de construir o fabricar, me va a hacer feliz.
                </p>
              </div>
          </div>
        </div>

        <div className="job-section">
          <div className="job-container">
            <div className="job-column" style={{flex: 2}}>
              <div className="job-content">
                <p>
                  Trabajo en el sector de la educación creando contenidos sobre tecnología, eligiendo la más adecuada para el proyecto y creándola cuando no existe.
                </p>
                <p>
                  En los cinco años que llevo en el sector educativo he creado: PCB, firmware, test fixture, test software, aplicaciones web, aplicaciones Android, contenidos que combinan la tecnología con el juego para webs educativas orientadas a docentes y alumnado de educación primaria y libros de texto impresos y digitales para educación secundaria.
                </p>
              </div>
            </div>
            <div className="job-column">
              <StaticImage
                src="../images/manos-de-niñes.webp"
                alt="Manos de niños y niñas sobre una mesa blanca formando un círculo con placas electrónicas entre los dedos."
                className="job-picture"
                placeholder="blurred"
                layout="constrained"
              />
            </div>
          </div>
        </div>

        <div className="about-section">
          <div className="about-container" style={{marginBottom: 0}}>
              <div className="about-content">
                <p>
                  Considero que la revolución industrial más importante de lo que va de siglo es la ingeniería <i>open source</i>.
                </p>
              </div>
              <a href={"/conoceme" } className="about-button" style={{ textDecoration: 'none' }}>
                  <span>Conoce más sobre mí</span>
              </a>
          </div>
        </div>

      </div>
    </Layout>
  )
}

export default Index

export const Head = () => <title>Enrique Gómez</title>