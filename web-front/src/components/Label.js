import React from "react";
import "./label.css"

export default function Label(props) {

  return (
    <div
      className="label"
      style={{backgroundColor: props.label === "WIP" ? "red" : "#0573e1"}}
      title={props.label === "WIP" ? "Work in progress" : props.label}
    >
      {props.label}
    </div>
  )
}