import React, { useState, useContext } from "react"
import { NavLink } from "react-router-dom"
import classNames from "classnames/dedupe"
//import Parser from 'html-react-parser';
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
    <section className="section pt-2">
      <div className="container">
        <div className="about">
          <div className="about__content">
            <h2 className="headline title--offset">
              {home.about_title}
            </h2>
            <div className="text about__text">
              {/* {Parser(home.about_desc)} */}
              <p>
                Zapraszam do zapoznania się z moją ofertą.
              </p>
              <h3 className="title title--small mb-1">
                Zakres usług:
              </h3>
              <ul className="about__list">
                <li>
                  Loty dronem na marsa
                </li>
                <li>
                  Polowanie na kojoty
                </li>
                <li>
                  Ogniska w Dolinie Muminków
                </li>
                <li>
                  Dzikie tańce
                </li>
                <li>
                  Walka ze złem
                </li>
              </ul>
              <p>
                Cena usług ustalana jest idywidualnie.
              </p>
              <NavLink to="/o-mnie" className="button button--arrow about__button" onMouseOver={over} onMouseOut={out}>
                O mnie
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