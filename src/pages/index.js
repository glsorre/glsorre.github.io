import React, { useState, useEffect } from "react"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { CSSTransition, TransitionGroup } from "react-transition-group"

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogFilter from "../components/blog_filter"
import { Link } from "gatsby"

const IndexPage = (props) => {
  const [animation, setAnimation] = useState(false)
  const [edges, setEdges] = useState([])

  useEffect(() => {
    setAnimation(true)

    setEdges(props.data.allMarkdownRemark.edges.filter(
      edge => {
        if (props.location.state.filterLink == '🦄') {
          return true
        } else {
          return props.location.state.filterLink == edge.node.frontmatter.type
        }
      }))
  });

  if (props.location.state == null) {
    props.location.state = { filterLink: "🦄" }
  }

  return (
    <Layout location={props.location}>
      <SEO title="Home" keywords={[`home`, `rightright`, `giuseppe sorrentino`]} />
      <CSSTransition in={animation} timeout={700} classNames="animation" unmountOnExit>
        <div>
          <div class="home grid">
            <div class="unit whole">
              <div class="selector-container">
                I am a: &nbsp;
                <BlogFilter
                  value={'🦄'}
                  filterLink={props.location.state.filterLink}
                />

                <BlogFilter
                  value={'writer'}
                  filterLink={props.location.state.filterLink}
                />

                <BlogFilter
                  value={'speaker'}
                  filterLink={props.location.state.filterLink}
                />

                <BlogFilter
                  value={'developer'}
                  filterLink={props.location.state.filterLink}
                />

                <BlogFilter
                  value={'designer'}
                  filterLink={props.location.state.filterLink}
                />
              </div>

              <TransitionGroup className="link-list">
              {edges.map(link => {

                let label = <span class="post-type">{link.node.frontmatter.label}</span>;
                let anchor;

                if (link.node.frontmatter.type == 'designer') {
                  anchor = <Link to={link.node.frontmatter.anchor}>{link.node.frontmatter.title}</Link> 
                } else {
                  anchor = <OutboundLink class="post-link" href={link.node.frontmatter.anchor} target="_blank">{link.node.frontmatter.title}</OutboundLink>
                }

                return (
                  <CSSTransition in={animation} timeout={700} classNames="animation">
                    <div className={"post-container"}>

                      {label}

                      <span class="post-meta">{link.node.frontmatter.date}</span>

                      <h2 class="post-title">
                        {anchor}
                      </h2>

                      <span class="post-description"><i>{link.node.frontmatter.desc} </i></span>
                    </div>
                  </CSSTransition>
                )
              }

              )}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </CSSTransition>
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
            date(formatString: "MMMM D, YYYY")
            title
            desc
            anchor
            type
            label
          }
        }
      }
    }
  }
`