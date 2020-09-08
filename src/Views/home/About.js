import React, { useState, useContext } from "react"
import { NavLink } from "react-router-dom"
import classNames from "classnames/dedupe"
import Parser from 'html-react-parser';
import HomeContext from "../../HomeContext"
import image from "../../assets/images/vito2.jpg"

const About = () => {
  const [hover, setHover] = useState(false)
  const home = useContext(HomeContext)

  const over = () => {
    setHover(true)
  }

  const out = () => {
    setHover(false)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="about">
          <div className="about__content">
            <h2 className="headline title--offset">
              {home.about_title}
            </h2>
            <div className="text about__text">
              {Parser(home.about_desc)}
              <NavLink to="/o-mnie" className="button button--small about__button" onMouseOver={over} onMouseOut={out}>
                Czytaj więcej
              </NavLink>
            </div>
          </div>
          <div className="about__photo">
            <img className={classNames('about__img', {'about__img--hover' : hover})} src={image} alt="O mnie" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About