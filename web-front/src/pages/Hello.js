import React, { useState, useEffect } from "react";
import "./hello.css"

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
    <div className="page hello-section">
      <div className="hello-column">
        <img className="hello-profile" alt="Enrique's profile" src="enrique-profile.jpg"/>
      </div>
      <div className="hello-column" style={{flex: 2}}>
        <div className="hello-content">
          <h2>Electro hola</h2>
          <p>
            Soy Enrique, un ingeniero electrónico enamorado del diseño y fabricación de hardware.
          </p>
          <p>
            Me gustan los retos ingenieriles, especialmente los que están relacionados con el diseño, fabricación y testeo de hardware y tienen como objetivo mejorar la sociedad.
          </p>
          <p>
            Trabajo en el sector de la educación creando contenidos sobre tecnología, eligiendo la más adecuada para el proyecto y creándola cuando no existe. En los cinco años que llevo en el sector he creado PCB, firmware, test fixture, aplicaciones web, aplicaciones android, contenidos que combinan la tecnología con el juego para webs educativas orientadas a docentes y alumnado de educación primaria y libros de texto impresos y digitales para educación secundaria.
          </p>
          <p>Todo lo hago <i>Open Source</i> si me dejan.</p>
        </div>
      </div>
    </div>
  )
}