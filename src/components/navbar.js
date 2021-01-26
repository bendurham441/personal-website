import React from "react"
import { Link } from "gatsby"

import navbarStyles from "./navbar.module.css"

const Navbar = ({ title, isRootPath }) => {
  return (
    <nav className={navbarStyles.navbar}>
      <Link className={navbarStyles.headerLinkHome} to="/">
        {isRootPath ? 'Home' : title}
      </Link>
      <div>
        <Link className={navbarStyles.navitem} to="/blog">
          Blog
        </Link>
        <Link className={navbarStyles.navitem} to="/resume">
          Resume
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
