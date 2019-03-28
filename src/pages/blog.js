import React, {useState, useEffect} from "react"
import { graphql } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogFilter from "../components/blog_filter"

const BlogPage = (props) => {
  if (props.location.state == null) {
    props.location.state = { filterLink: "all" }
  }

  const [edges, setEdges] = useState([])

  useEffect(() => {
    setEdges(props.data.allMarkdownRemark.edges.filter(
      edge => {
        if (props.location.state.filterLink == 'all') {
          return true
        } else {
          return props.location.state.filterLink == edge.node.frontmatter.type
        }
      }))
  });

  const filterEdges = () => {
    console.log('prova')
  }

  return (
    <Layout location={props.location}>
      <SEO title="Blog" keywords={[`blog`, `rightright`, `giuseppe sorrentino`]} />

      <div class="home grid">

        <div class="unit whole">

          <h1>Blog</h1>

          <div class="post-container">
            <BlogFilter
              value={'all'}
              onHeaderClick={filterEdges}
              filterLink={props.location.state.filterLink}
            />

            <BlogFilter
              value={'post'}
              onHeaderClick={filterEdges}
              filterLink={props.location.state.filterLink}
            />

            <BlogFilter
              value={'slides'}
              onHeaderClick={filterEdges}
              filterLink={props.location.state.filterLink}
            />

            <BlogFilter
              value={'project'}
              onHeaderClick={filterEdges}
              filterLink={props.location.state.filterLink}
            />

            <BlogFilter
              value={'gist'}
              onHeaderClick={filterEdges}
              filterLink={props.location.state.filterLink}
            />

          </div>

          <TransitionGroup className="post-list">
          {edges.map(link => {

              let label

              if (link.node.frontmatter.type == 'post') {
                label = <span class="post-type">POST</span>;
              } else if (link.node.frontmatter.type == 'slides') {
                label = <span class="post-type">SLIDES</span>;
              } else if (link.node.frontmatter.type == 'project') {
                label = <span class="post-type">PROJECT</span>;
              } else if (link.node.frontmatter.type == 'gist') {
                label = <span class="post-type">GIST</span>;
              }
              
              return (
                <CSSTransition
                  key={link.node.id}
                  timeout={500}
                  classNames="animation"
                >
                  <div className={"post-container"}>

                    {label}

                    <span class="post-meta">{link.node.frontmatter.date}</span>

                    <h2 class="post-title">
                      <OutboundLink class="post-link" href={link.node.frontmatter.anchor} target="_blank">{link.node.frontmatter.title}</OutboundLink>
                    </h2>

                    <span class="post-description"><i>{link.node.frontmatter.desc} </i></span>
                  </div>
                </CSSTransition>
              )}

            )}
            </TransitionGroup>
        </div>
      </div>
    </Layout>
  )
}

export default BlogPage

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
          }
        }
      }
    }
  }
`