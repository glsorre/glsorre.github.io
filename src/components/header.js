import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import "./rightright_logo.svg"

const Header = ({ siteTitle, menu, location }) => {
  const [menuAn, setMenuAn] = useState([])

  useEffect(() => {
    setMenuAn(menu)
  })

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
          <TransitionGroup class="nav">
            {menuAn
            .filter(item => item.path != location.pathname)
            .map(item => (
              <CSSTransition
                  key={item.id}
                  timeout={700}
                  classNames="animation"
                  mountOnEnter
                >
                <Link
                  to={item.path}
                  className="nav-link"
                  state={{ filterLink: "all" }}
                >
                  {item.label}
                </Link>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>

      </div>

    </header>
  )
}

export default Header
