import React from "react"
import { graphql } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
    data: {
      allMarkdownRemark: { edges },
    },
  }) => {
    return (  
      <Layout>
        <SEO title="Home" keywords={[`blog`, `rightright`, `giuseppe sorrentino`]} />
        <div class="home grid">
          <div class="unit whole">

            {edges.map(link => {

              let label;

              if (link.node.frontmatter.type == 'medium') {
                label = <span class="post-type">POST</span>;
              } else if (link.node.frontmatter.type == 'slideshare') {
                label = <span class="post-type">SLIDES</span>;
              } else if (link.node.frontmatter.type == 'project') {
                label = <span class="post-type">PROJECT</span>;
              } else if (link.node.frontmatter.type == 'gist') {
                label = <span class="post-type">GIST</span>;
              }
              
              return (
                <div class="post-container">

                  {label}

                  <span class="post-meta">{ link.node.frontmatter.date }</span>

                  <h2 class="post-title">
                    <OutboundLink class="post-link" href={ link.node.frontmatter.anchor } target="_blank">{ link.node.frontmatter.title }</OutboundLink>
                  </h2>

                  <span class="post-description"><i>{ link.node.frontmatter.desc } </i></span>
                </div>
              )}
            )}

          </div>
        </div>
      </Layout>
    )
  }

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/(links)/"}}
      sort: { order: DESC, fields: [frontmatter___date] }
      ) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD, MM, YYYY")
            title
            desc
            anchor
            type
          }
        }
      }
    }
  }
`