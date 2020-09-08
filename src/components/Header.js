import React, { useState } from "react"
import Burger from "@animated-burgers/burger-slip"
import { NavLink } from "react-router-dom"
import Nav from "../components/Nav"

const Header = ({ logo }) => {
  const [openNav, setOpenNav] = useState(false)

  const toggleBurger = () => setOpenNav(!openNav)

  return (
    <div className="container">
      <div className="header">
        <NavLink to="/" className="header__brand">
          <img src={logo} alt="logo" />
        </NavLink>
        <Burger isOpen={openNav} onClick={toggleBurger} className="header__burger" />
        <Nav active={openNav} toggle={setOpenNav} />
      </div>
    </div>
  )
}

export default Header
