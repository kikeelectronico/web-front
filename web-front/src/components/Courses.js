import React, { useState, useEffect } from "react";
import "./courses.css"

const API = process.env.REACT_APP_API_URL;

export default function Courses(props) {

  const [courses, setCourses] = useState(null);
  const [max_cards, setMaxCards] = useState(3);

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    fetch(API + "/courses/")
    .then((response) => response.json())
    .then((data) => setCourses(data))
    .catch((error) => console.log(error))
  }

  return (
    <div>
      {
        courses === null
        ?
          <section className="courses-loading-container" id={props.id}>
            <h2>Cargando...</h2>
          </section>
        :
          <>
          {
            courses.length === 0
            ?
              <section className="courses-loading-container" id={props.id}>
                <h2>Sin resultados</h2>
              </section>
            :
              <section className="courses-section" id={props.id}>
                <div className="courses-container">
                  {
                    courses.slice(0,max_cards).map((course) => {
                      return (
                        <div key={course.title} className="course-card">
                          <h3 className="course-title">
                            {course.title}
                          </h3>
                          <p className="course-description">
                            {course.description}
                          </p>
                          <div className="course-buttons">
                          {
                            course.buttons ?
                              course.buttons.map((button, index) => {
                                return (
                                  <a className="course-button" style={{marginRight: index === course.buttons.length-1 ? 0 : 30}} href={button.url} target="_blanck" key={button.title}>
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
                    max_cards !== courses.length && courses.length > max_cards ?
                    <div key="plus" className="course-card-plus" onClick={() => {setMaxCards(courses.length)}}>
                      <span className="course-plus">+</span>
                      <span className="course-plus-text">Ver más cursos</span>
                    </div>
                    : <></>
                  }
                </div>            
              </section> 
          }
          </>
      }
    </div>
  )
}