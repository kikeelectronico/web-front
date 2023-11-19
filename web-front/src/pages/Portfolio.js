import React from "react";

import SectionTitle from "../components/SectionTitle"
import Projects from "../components/Projects"

export default function Portfolio() {

  return (
    <div className="page">
      <SectionTitle title="Proyectos de hardware" image="soldering.png"/>
      <Projects type="hardware" id="hardware"/>
      <SectionTitle title="Proyectos de software" image="software.png"/>
      <Projects type="software" id="software"/>
      <SectionTitle title="Otros proyectos" image="hand.png"/>
      <Projects type="contenido" id="others"/>
    </div>
  )
}