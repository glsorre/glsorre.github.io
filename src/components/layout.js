import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

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
    </main>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.node.isRequired
}

export default Layout
