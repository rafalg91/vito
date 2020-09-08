import React from 'react'
import classNames from "classnames/dedupe"

const Nav = ({categories, cat, toggle}) => (
  <nav className="projects__nav">
    {categories.map((category) => (
      <a
        key={category.id}
        href="/"
        className={classNames("projects__button", {
          "projects__button--active": category.id === cat,
        })}
        onClick={toggle(category.id)}
      >
        {category.name}
      </a>
    ))}
  </nav>
)

export default Nav