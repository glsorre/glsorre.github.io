import { Link } from "gatsby"
import React, {useState, useEffect} from "react"

import "./rightright_logo.svg"

const Header = ({ siteTitle, menu, location }) => {
  return (
    <header class="header">
      <div class="grid">

        <div class="unit golden-small">
          <h1 class="logo">
            <Link
              to="/"
            >
              {siteTitle}
            </Link>
          </h1>
        </div>

        <div class="unit golden-big">
          <nav class="nav">
            {menu.map(item => (
              <Link
                to={item.path}
                className="nav-link"
                state={{ filterLink: "all" }}
              >
                {item.label}
              </Link>
            ))}  
            <a class="nav-link" href="/feed.xml">feed</a>
          </nav>
        </div>

      </div>

    </header>
  )
}

export default Header
