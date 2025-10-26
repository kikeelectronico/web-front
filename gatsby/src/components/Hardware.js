import React, { useState } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby";

import Label from "./Label";
import "./projects.css"

export default function Hardware(props) {

  const [max_cards, setMaxCards] = useState(3);

  const data = useStaticQuery(graphql`
    query HardwareAndImages {
      allHardwareJson {
        nodes {
          title
          description
          image
          priority
          public
          type
          buttons {
            title
            url
          }
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
          relativePath: { regex: "/projects/hardware/" } 
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
  `);

  const projects = data.allHardwareJson.nodes

  // Diccionario de imágenes
  const imagesMap = {}
  data.allFile.nodes.forEach(node => {
    const baseName = node.relativePath.split('/').pop().split('.').slice(0, -1).join('.')
    imagesMap[baseName] = getImage(node.childImageSharp)
  })

  return (
    <section className="projects-section" id={props.id}>
      <div className="projects-container">
        {
          projects.slice(0,max_cards).map((project) => {
            
            const baseName = project.parent.name 
            const image = imagesMap[baseName]
            
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

                <GatsbyImage
                    image={image}
                    alt={`Imagen representativa de ${project.title}`}
                    className="project-image"
                  />

              </div>
            )
          })
        }
      </div>
      {
        max_cards !== projects.length && projects.length > max_cards ?
        <button key="plus" className="project-card-plus" onClick={() => {setMaxCards(projects.length)}}>
          <span className="project-plus">+</span>
          <span className="project-plus-text">Ver más proyectos</span>
        </button>
        : <></>
      }
    </section>
  )
}