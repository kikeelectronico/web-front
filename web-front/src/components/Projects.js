import React, { useState, useEffect } from "react";
import "./projects.css"

import Label from "./Label";

import API from "../constants"

export default function Projects(props) {

  const [projects, setProjects] = useState([]);
  const [max_cards, setMaxCards] = useState(3);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch(API + "/projects/?type=" + props.type)
    .then((response) => response.json())
    .then((data) => setProjects(data))
    .catch((error) => console.log(error))
  }

  return (
    <div>
      <section className="projects-container" id={props.id}>
        {
          projects.slice(0,max_cards).map((project) => {
            return (
              <div key={project.title} className="project-card">
                <div className="project-labels">
                  {
                    project.type.map(label => {
                      return (<Label key={label} label={label}/>)
                    })
                  }
                </div>
                <h3 className="project-title">
                  {project.title}
                </h3>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="project-buttons">
                {
                  project.buttons.map((button) => {
                    return (
                      <a className="project-button" href={button.url} target="_blanck" key={button.title}>
                          {button.title}
                      </a>
                    )
                  })
                }
                </div>

                <img className="project-image" alt="Proyecto" src={project.image}/>

              </div>
            )
          })
        }
        
        
      </section> 
      {
        max_cards !== projects.length && projects.length > 3 ?
        <div key="plus" className="project-card-plus" onClick={() => {setMaxCards(projects.length)}}>
          <span className="project-plus">+</span>
          <span className="project-plus-text">Ver m??s proyectos</span>
        </div>
        : <></>
      }
    </div>
  )
}