import React, { useState, useContext, useEffect } from "react"
import HomeContext from "../../HomeContext"
import { categories, projects } from "../../api"
import Nav from "../home/Projects/Nav"
import Grid from "../home/Projects/Grid"
import Modal from "../home/Projects/Modal"

const Projects = () => {
  const [cat, setCat] = useState(2)
  const [modal, setModal] = useState(false)
  const [lightbox, setLightbox] = useState(null)
  const [filteredProjects, setFilteredProjects] = useState([])
  const home = useContext(HomeContext)

  useEffect(() => {
    setProjects(2)
  }, [])

  const setProjects = (id) => {
    setFilteredProjects(
      projects.filter((project) => project.category.id === id)
    )
  }

  const toggle = (id) => (e) => {
    e.preventDefault()
    setCat(id)
    setProjects(id)
  }

  const openModal = (img) => {
    setModal(!modal)
    setLightbox(img)
    document.body.parentElement.classList.add('lock');
  }

  const closeModal = () => {
    setModal(false)
    document.body.parentElement.classList.remove('lock');
  }

  return (
    <>
      {modal && <Modal close={closeModal} image={lightbox} />}
      <section className="section">
        <div className="container">
          <h2 className="headline">
            {home.projects_title}
          </h2>
          <p className="text section__desc">
            {home.projects_desc}
          </p>
          <div className="projects">
            <Nav categories={categories} cat={cat} toggle={toggle} />
            <Grid projects={filteredProjects} openModal={openModal} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
