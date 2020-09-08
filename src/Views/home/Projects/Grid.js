import React from "react"

const Grid = ({projects}) => (
  <div className="projects__gallery">
    {projects.map((project) => (
      <div key={project.id} className="projects__item">
        <img src={project.url} alt={project.title} />
        <div className="projects__cover">{project.title}</div>
      </div>
    ))}
  </div>
)

export default Grid