import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import "typeface-source-sans-pro"

const Layout = ({ location, children }) => {
  return (
    <main>
      <Header location={location} />
      <div class="container">
      
        {children}

      </div>
      <Footer />
      <script id="CookieDeclaration" src="https://consent.cookiebot.com/69be4656-4dae-48c5-adf2-8d8a1a5ae738/cd.js" type="text/javascript" async></script>
    </main>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired
}

export default Layout
