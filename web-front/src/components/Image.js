import React from "react";
import "./image.css"

export default function Image(props) {

  if (props.image !== null) 
    return (
      <div
          className="image-overlay"
          style={{visibility: props.image === null ? "hidden" : "visible"}}
          onClick={() => {props.setUrl(null)}}
      >
        <img className="image-overlay-image" src={props.image.url.replace("_content", "_big")} alt={props.image.alt}/>
      </div>
    )
  else 
    return (<></>)
}