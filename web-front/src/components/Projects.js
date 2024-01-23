import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import "./projects.css"

import Label from "./Label";

const API = process.env.REACT_APP_API_URL;

export default function Projects(props) {

  const { tldr } = useParams()
  const [projects, setProjects] = useState([]);
  const [max_cards, setMaxCards] = useState(3);

  useEffect(() => {
    fetch(API + "/projects/?type=" + props.type + (tldr !== undefined ? "&tldr=" + tldr : ""))
    .then((response) => response.json())
    .then((data) => setProjects(data))
    .catch((error) => console.log(error))
  }, [props, tldr])

  return (
    <div>
        {
          projects.length === 0
          ?
            <section className="project-loading-container" id={props.id}>
              <h2>Cargando...</h2>
            </section>
          :
            <section className="projects-section" id={props.id}>
              <div className="projects-container">
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
                          project.buttons.map((button, index) => {
                            return (
                              <a className="project-button" style={{marginRight: index === project.buttons.length-1 ? 0 : 30}} href={button.url} target="_blanck" key={button.title}>
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
              </div>
              {
                max_cards !== projects.length && projects.length > max_cards ?
                <div key="plus" className="project-card-plus" onClick={() => {setMaxCards(projects.length)}}>
                  <span className="project-plus">+</span>
                  <span className="project-plus-text">Ver más proyectos</span>
                </div>
                : <></>
              }
            </section>
        }
    </div>
  )
}