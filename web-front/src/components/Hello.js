import React from "react";
import "./hello.css"

export default function Hello() {

  return (
    <div className="hello-section">
      <div className="hello-column">
        <div className="hello-content">
          <h2>Electro hola</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec dolor sagittis, dignissim magna vel, tincidunt ligula. Fusce enim augue, scelerisque nec magna vel, porta mattis odio. Vivamus imperdiet ex et nibh convallis, vel tincidunt nunc varius. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse potenti.
          </p><p>
          Nulla finibus, leo blandit venenatis iaculis, lorem odio commodo neque, non euismod mauris mauris vitae est. Fusce scelerisque quis eros id fermentum. Quisque fermentum nulla sed erat consectetur, sed auctor enim consequat.</p>
        </div>
      </div>
      <div className="hello-column">
        <img className="hello-profile" alt="Enrique's profile" src="enrique-profile.jpg"/>
      </div>
    </div>
  )
}