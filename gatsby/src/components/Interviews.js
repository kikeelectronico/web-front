import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"

import "./interviews.css"

export default function Interviews(props) {

  const [max_cards, setMaxCards] = useState(3);

  const data = useStaticQuery(graphql`
    query InterviewsAndImages {
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
          parent {
          ... on File {
            name
          }
        }
        }
      }
      allFile(
        filter: { 
          sourceInstanceName: { eq: "content" }, 
          extension: { regex: "/(jpg|jpeg|png|webp)/" }
          relativePath: { regex: "/knowme/interviews/" } 
        }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  `)

  const interviews = data.allInterviewsJson.nodes

  // Diccionario de imágenes
  const imagesMap = {}
  data.allFile.nodes.forEach(node => {
    const baseName = node.relativePath.split('/').pop().split('.').slice(0, -1).join('.')
    imagesMap[baseName] = getImage(node.childImageSharp)
  })

  return (
    <section className="interviews-section" id={props.id}>
      <div className="interviews-container">
        {
          interviews.slice(0,max_cards).map((interview) => {

            const baseName = interview.parent.name 
            const image = imagesMap[baseName]

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

                <GatsbyImage
                  image={image}
                  alt={`Imagen representativa de ${interview.title}`}
                  className="interview-image"
                />
                
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
  )
}