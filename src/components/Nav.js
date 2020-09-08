import React from "react"
import { NavLink } from "react-router-dom"
import classNames from "classnames/dedupe"
import { pages } from "../api"

const Nav = ({ active, toggle }) => {
  let style = classNames('header__nav', { 'header__nav--active': active })

  const close = (e) => (
    e.target.tagName === 'A' && toggle(!active)
  )

  return (
    <nav className={style} onClick={close}>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink to="/o-mnie">
        O mnie
      </NavLink>
      <NavLink to="/realizacje">
        Realizacje
      </NavLink>
      <NavLink to="/blog">
        Blog
      </NavLink>
      {pages.map((page) => (
        <NavLink to={page.url} key={page.id}>
          {page.title}
        </NavLink>
      ))}
      <NavLink to="/kontakt">
        Kontakt
      </NavLink>
    </nav>
  )
}

export default Nav