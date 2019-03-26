import { Link } from "gatsby"
import React from "react"
import { Location } from '@reach/router';

import "./rightright_logo.svg"

const Header = ({ siteTitle, menu }) => {
  return (
    <Location>
    {({ location }) => (
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
              {menu
              .filter(item => item.path != location.pathname)
              .map(item => (
                <Link
                  to={item.path}
                  className="nav-link"
                  state={{ filterLink: 'all' }}
                >
                  {item.label}
                </Link>
              ))}
              <a class="nav-link" href="/feed.xml">feed</a>
            </nav>
          </div>

        </div>

      </header>
    )}
    </Location>
)}

export default Header
