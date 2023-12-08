import React from "react";
import "./image.css"

export default function Image(props) {

  return (
    <div
        className="image-overlay"
        style={{visibility: props.url === "" ? "hidden" : "visible"}}
        onClick={() => {props.setUrl("")}}
    >
        <img className="image-overlay-image" src={props.url}/>
    </div>
  )
}