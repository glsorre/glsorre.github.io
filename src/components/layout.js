import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import "typeface-source-sans-pro"

const Layout = ({ children }) => {
  return (
  <StaticQuery
    query={graphql`
    query {
        site {
          siteMetadata {
            title
            menu {
              label
              path
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <div class="container">
          <Header siteTitle={data.site.siteMetadata.title} menu={data.site.siteMetadata.menu} />
        
          {children}
        </div>
        <Footer />
      </>
    )}
  />
)}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
