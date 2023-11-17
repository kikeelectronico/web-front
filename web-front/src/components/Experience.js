import React, { useState, useEffect } from "react";
import "./experience.css"

const API = process.env.REACT_APP_API_URL;

export default function Experience(props) {

  const [experiences, setExperiences] = useState([]);
  const [max_cards, setMaxCards] = useState(3);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch(API + "/experiences/")
    .then((response) => response.json())
    .then((data) => setExperiences(data))
    .catch((error) => console.log(error))
  }

  return (
    <section className="experiences-container" id={props.id}>
      {
        experiences.slice(0,max_cards).map((experience) => {
          return (
            <div key={experience.title} className="experience-card">
              <h3 className="experience-title">
                {experience.title}
              </h3>
              <p className="experience-description">
                {experience.description}
              </p>
              <div className="experience-buttons">
              {
                experience.buttons ?
                  experience.buttons.map((button) => {
                    return (
                      <a className="experience-button" href={button.url} target="_blanck" key={button.title}>
                          {button.title}
                      </a>
                    )
                  })
                : <></>
              }
              </div>
            </div>
          )
        })
      }
      {
        max_cards !== experiences.length && experiences.length > 3 ?
        <div key="plus" className="experience-card-plus" onClick={() => {setMaxCards(experiences.length)}}>
          <span className="experience-plus">+</span>
          <span className="experience-plus-text">Ver más experiencia</span>
        </div>
        : <></>
      }
      
    </section> 
  )
}