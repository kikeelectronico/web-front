import React from "react";
import "./hello.css"

export default function Hello() {

  return (
    <section className="hello-section" id="hello">
      <div className="hello-column">
        <div className="hello-content">
          <h2>Electro hola</h2>
          <p>
            Soy Enrique, un ingeniero electrónico enamorado del diseño y fabricación de hardware.
          </p>
          <p>
            Trabajo en el sector de la educación creando contenidos sobre tecnología, eligiendo la más adecuada para el proyecto y creándola cuando no existe. Dedico la mayoría de mi jornada a un proyecto realmente grande para el que he creado contenido, hardware, firmware, web apps y apps móviles.
          </p>
          <p>
            Me gustan los retos ingenieriles, pero me encanta cuando están relacionados con el diseño de hardware.
          </p>
          <p>Todo lo hago <i>Open Source</i> si me dejan.</p>
        </div>
      </div>
      <div className="hello-column">
        <img className="hello-profile" alt="Enrique's profile" src="enrique-profile.jpg"/>
      </div>
    </section>
  )
}