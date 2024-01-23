import React from "react";

import SectionTitle from "../components/SectionTitle"
import Projects from "../components/Projects"

export default function Portfolio() {

  return (
    <div className="page">
      <SectionTitle title="Hardware" image="/soldering.png"/>
      <Projects type="hardware" id="hardware"/>
      <SectionTitle title="Software" image="/software.png"/>
      <Projects type="software" id="software"/>
      <SectionTitle title="Otros" image="/hand.png"/>
      <Projects type="contenido" id="others"/>
    </div>
  )
}