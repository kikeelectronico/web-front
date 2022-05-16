import React from "react";
import "./label.css"

export default function Label(props) {

  return (
    <div className="label">
      {props.label}
    </div>
  )
}