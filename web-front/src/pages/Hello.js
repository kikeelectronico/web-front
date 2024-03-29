import React, { useState, useEffect } from "react";
import "./hello.css"
import { Helmet } from "react-helmet";

const API = process.env.REACT_APP_API_URL;

export default function Hello() {

  const [wakeUp, setWakeUp] = useState(false)

  useEffect(() => {
    if (!wakeUp)
      fetch(API + "/")
      .then((response) => response.json())
      .then((data) => setWakeUp(true))
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="page">
      <Helmet>
        <link rel="preload" fetchpriority="high" as="image" href="/enrique-profile.png" type="image/png"/>
        <link rel="preload" fetchpriority="high" as="image" href="/manos-de-niñes.webp" type="image/webp"/>                                            
      </Helmet>

      <div className="hello-section">
        <div className="hello-container">
          <div className="hello-column" style={{paddingBottom: 0}}>
            <img className="hello-profile" alt="Foto de perfil de Enrique Gómez" fetchpriority="high" src="enrique-profile.png"/>
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
            <img className="job-picture" alt="Maños de niños y niñas sobre una mesa blanca formando un círculo con placas electrónicas entre los dedos." fetchpriority="high" src="manos-de-niñes.webp"/>
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
            <a href={"/conoceme" } style={{ textDecoration: 'none' }}>
              <div className="about-button">
                <span>Conoce más sobre mí</span>
              </div>
            </a>
        </div>
      </div>

    </div>
  )
}