import React, { useState, useEffect } from "react";
import "./projects.css"

import Label from "./Label";

const API = "http://" + window.location.hostname + ":8000"

export default function Projects() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch(API + "/projects/?type=hardware")
    .then((response) => response.json())
    .then((data) => setProjects(data))
    .catch((error) => console.log(error))
  }

  return (
    <div className="projects-container">
      {
        projects.map((project) => {
          return (
            <div key={project.title} className="project-card">
              <div className="project-labels">
                {
                  project.type.map(label => {
                    return (<Label label={label}/>)
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
                    <a className="project-button" href={button.url} target="_blanck">
                        {button.title}
                    </a>
                  )
                })
              }
              </div>

              <img className="project-image" src={project.image}/>

            </div>
          )
        })
      }
    </div> 
  )
}