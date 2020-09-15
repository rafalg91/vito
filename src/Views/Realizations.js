import React, { useState } from "react"
import { projects } from "../api"
import Lightbox from "../components/Lightbox"

const Realizations = () => {
  const [modal, setModal] = useState(false)
  const [indexImage, setIndexImage] = useState(false)

  const openModal = (index) => {
    setModal(true)
    setIndexImage(index)
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      {modal && <Lightbox index={indexImage} closeModal={closeModal} tab={projects} />}
      <div className="container section">
        <h2 className="headline headline--center">
          Realizacje
        </h2>
        <div className="gallery">
          {projects.map((project) => (
            <div key={project.id} className="gallery__item" onClick={() => openModal(projects.indexOf(project)) }>
              <img src={project.url} alt={project.title} />
              <div className="gallery__cover">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Realizations
