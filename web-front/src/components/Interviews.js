import React, { useState, useEffect } from "react";
import "./interviews.css"

const API = "http://" + window.location.hostname + ":8000"

export default function Interviews(props) {

  const [interviews, setInterviews] = useState([]);
  const [max_cards, setMaxCards] = useState(3);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch(API + "/interviews/")
    .then((response) => response.json())
    .then((data) => setInterviews(data))
    .catch((error) => console.log(error))
  }

  return (
    <div>
      <section className="interviews-container" id={props.id}>
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
                  interview.buttons.map((button) => {
                    return (
                      <a className="interview-button" href={button.url} target="_blanck" key={button.title}>
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
        
        
      </section> 
      {
        max_cards !== interviews.length && interviews.length > 3 ?
        <div key="plus" className="interview-card-plus" onClick={() => {setMaxCards(interviews.length)}}>
          <span className="interview-plus">+</span>
          <span className="interview-plus-text">Ver más entrevistas</span>
        </div>
        : <></>
      }
    </div>
  )
}