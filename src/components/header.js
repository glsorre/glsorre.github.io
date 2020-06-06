import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"

import sticker from "../../static/headerSticker_001.svg"

const Header = ({ location }) => {
  return (
    <StaticQuery
      query={headerQuery}
      render={ data => {
        return (
          <header class="header">
            <div class="grid">

              <div class="unit whole">
                <div class="intro">
                  <Link to="/"
                        state={{ filterLink: '🦄' }}>
                    <img class="sticker" alt={data.allMarkdownRemark.edges[0].node.frontmatter.alternative_text} src={sticker}/>
                  </Link>
                  <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}}></div>
                </div>
              </div>

            </div>

          </header>
        )}
      }
    />
  )
}

export default Header

export const headerQuery = graphql`
  query HeaderQuery {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/hf.md$/"}}) {
      edges {
        node {
          id
          frontmatter {
            mail
            alternative_text
          }
          html
        }
      }
    }
  }
`
