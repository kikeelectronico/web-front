import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import "./interviews.css"

export default function Interviews(props) {

  const [max_cards, setMaxCards] = useState(3);

  const data = useStaticQuery(graphql`
    query {
      allInterviewsJson {
        nodes {
          title
          description
          buttons {
            title
            url
          }
          image
          priority
        }
      }
    }
  `);

const interviews = data.allInterviewsJson.nodes; 

  return (
    <>
      {
        interviews.length === 0
        ?
          <section className="interviews-loading-container" id={props.id}>
            <h2>Sin resultados</h2>
          </section>
        :
          <section className="interviews-section" id={props.id}>
            <div className="interviews-container">
              {
                interviews.slice(0,max_cards).map((interview) => {
                  return (
                    <div key={interview.title} className="interview-card">
                      <h3 className="interview-title">
                        {interview.title}
                      </h3>
                      <p className="interview-description">
                        {interview.description}
                      </p>
                      <div className="interview-buttons">
                      {
                        interview.buttons.map((button, index) => {
                          return (
                            <a className="interview-button" style={{marginRight: index === interview.buttons.length-1 ? 0 : 30}} href={button.url} target="_blanck" key={button.title}>
                                {button.title}
                            </a>
                          )
                        })
                      }
                      </div>

                      <img className="interview-image" alt="Proyecto" src={interview.image}/>

                    </div>
                  )
                })
              }
            </div>              
            {
              max_cards !== interviews.length && interviews.length > max_cards ?
              <button key="plus" className="interview-card-plus" onClick={() => {setMaxCards(interviews.length)}}>
                <span className="interview-plus">+</span>
                <span className="interview-plus-text">Ver más entrevistas</span>
              </button>
              : <></>
            }
            
          </section>
      }
    </>

  )
}