import React from "react";

import Projects from "../components/Projects"
import Courses from "../components/Courses"
import Interviews from "../components/Interviews"
import SectionTitle from "../components/SectionTitle"

export default function Portfolio() {

  return (
    <div className="page">
      <SectionTitle title="Proyectos de hardware" image="soldering.png"/>
      <Projects type="hardware" id="hardware"/>
      <SectionTitle title="Proyectos de software" image="software.png"/>
      <Projects type="software" id="software"/>
      <SectionTitle title="Otros proyectos" image="hand.png"/>
      <Projects type="contenido" id="others"/>
      {/* <SectionTitle title="Formación" image="book.png"/>
      <Courses id="courses"/>
      <SectionTitle title="Entrevistas" image="mic.png"/>
      <Interviews id="interviews"/> */}
      {/* <SectionTitle title="Contacto" image="chat.png"/>
      <Contact id="contact"/> */}
      
    </div>
  )
}