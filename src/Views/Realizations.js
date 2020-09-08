import React from "react"
import { projects } from "../api"

const Realizations = () => (
  <div className="container section">
    <h2 className="headline headline--center">
      Realizacje
    </h2>
    <div className="gallery">
      {projects.map(project => (
        <div className="gallery__item">
          <img src={project.url} alt={project.title} />
        </div>
      ))}
    </div>
  </div>
)

export default Realizations