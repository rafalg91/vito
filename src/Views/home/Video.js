import React, {useContext} from "react"
import { NavLink } from "react-router-dom"
import HomeContext from "../../HomeContext"

const Video = () => {
  const home = useContext(HomeContext)

  return (
    <section className="hero">
      <video className="hero__video" autoPlay muted loop>
        <source src={home.hero_video} type="video/mp4" />
      </video>
      <div className="hero__content">
        <div className="container">
          <div className="hero__box">
            <h1 className="headline hero__title">
              {home.hero_title}
            </h1>
            <p className="text hero__desc">
              {home.hero_desc}
            </p>
            <div className="hero__button">
              <NavLink to={home.hero_link} className="button">
                {home.hero_button}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Video;