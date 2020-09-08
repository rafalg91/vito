import React from "react"
import Contact from "./Contact"

const Footer = () => (
  <>
    <Contact />
    <div className="footer">
      <div className="container">
        <div className="text text--strong">
          © Copyright 2020
        </div>
        <div className="text text--small">
          Projekt i wykonanie - <a className="link" href="mailto:rafalgleba1@gmail.com">rafalgleba1@gmail.com</a>
        </div>
      </div>
    </div>
  </>
)

export default Footer