import { Link } from "gatsby"
import React from "react"
import { Location } from '@reach/router';

import "./rightright_logo.svg"

const Header = ({ siteTitle, menu }) => {
  return (
    <Location>
    {({ location }) => (
      <header class="header" role="banner">
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
                  class="nav-link"
                >
                  {item.label}
                </Link>
              ))}
              <a class="nav-link" href="https://rightright.me/feed.xml">feed</a>
            </nav>
          </div>

        </div>

        <div class="grid">
          <p class="unit whole description">
            i am <a href="#contacts">giuseppe sorrentino</a> and this is my personal digital playground
          </p>
        </div>

      </header>
    )}
    </Location>
)}

export default Header
