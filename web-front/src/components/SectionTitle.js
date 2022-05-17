import React from "react";
import "./sectiontitle.css"

export default function SectionTitle(props) {

  return (
    <section className="section-title" id={props.id}>      
      <img className="section-title-icon" alt="Icon" src={props.image}/>
      <h2 className="section-title-title">{props.title}</h2>
    </section>
  )
}