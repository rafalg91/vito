import React, { useState, useContext, useEffect } from "react"
import HomeContext from "../../HomeContext"
import { categories, projects } from "../../api"
import Nav from "../home/Projects/Nav"
import Grid from "../home/Projects/Grid"
// import Lightbox from "../../components/Lightbox"

const Projects = () => {
  const [cat, setCat] = useState(2)
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

  // const openModal = (img) => {
  //   setModal(!modal)
  //   setLightboxTab(img)
  //   document.body.parentElement.classList.add('lock');
  // }

  // const closeModal = () => {
  //   setModal(false)
  //   document.body.parentElement.classList.remove('lock');
  // }

  return (
    <>
      {/* {modal && <Lightbox close={closeModal} image={lightboxTab} />} */}
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
            <Grid projects={filteredProjects} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Projects
