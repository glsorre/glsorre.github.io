import React from "react"
import { Link } from "gatsby"

const Header = ({ location }) => {
  return (
    <header class="header">
      <div class="grid">

        <div class="unit whole">
          <div class="intro">
            <Link to="/"
                  state={{ filterLink: 'unicorn' }}>
              <img class="sticker" alt="Hello, my name is Giuseppe Sorrentino and right|right is my personal brand." src="headerSticker_001.svg" width="200" height="150" />
            </Link>
          </div>
        </div>

      </div>

    </header>
  )
}

export default Header
