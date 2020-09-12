import React, {useState} from "react"
import Lightbox from "../../../components/Lightbox"

const Grid = ({projects}) => {
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
      <div className="projects__gallery">
        {projects.map((project) => (
          <div key={project.id} className="projects__item" onClick={() => openModal(projects.indexOf(project)) }>
            <img src={project.url} alt={project.title} />
            <div className="projects__cover">{project.title}</div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Grid