import React, { useState, useEffect } from "react";
import "./skills.css"

const API = "http://" + window.location.hostname + ":8000"

export default function Skills(props) {

  const [skills, setSkills] = useState([]);
  const [max_cards, setMaxCards] = useState(3);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch(API + "/skills/")
    .then((response) => response.json())
    .then((data) => setSkills(data))
    .catch((error) => console.log(error))
  }

  return (
    <section className="skills-container" id={props.id}>
      {
        skills.slice(0,max_cards).map((skill) => {
          return (
            <div key={skill.title} className="skill-card">
              <h3 className="skill-title">
                {skill.title}
              </h3>
              <p className="skill-description">
                {skill.description}
              </p>
            </div>
          )
        })
      }
      {
        max_cards !== skills.length && skills.length > 3 ?
        <div key="plus" className="skill-card-plus" onClick={() => {setMaxCards(skills.length)}}>
          <span className="skill-plus">+</span>
          <span className="skill-plus-text">Ver más cursos</span>
        </div>
        : <></>
      }
      
    </section> 
  )
}