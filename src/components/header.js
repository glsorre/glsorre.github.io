import React from "react"
import { Link } from "gatsby"

import sticker from "../../static/headerSticker_001.svg"

const Header = ({ location }) => {
  return (
    <header class="header">
      <div class="grid">

        <div class="unit whole">
          <div class="intro">
            <Link to="/"
                  state={{ filterLink: '🦄' }}>
              <img class="sticker" alt="Hello, my name is Giuseppe Sorrentino and right|right is my personal brand." src={sticker}/>
            </Link>
            <p>My professional objective is <b>to avoid failure of digital products</b> by thinking/managing them <b>right</b> (using ux and agile) and developing them <b>right</b>.</p>
          </div>
        </div>

      </div>

    </header>
  )
}

export default Header
