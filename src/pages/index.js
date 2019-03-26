import React from "react"
import { graphql, Link } from "gatsby"
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
            <h2 id="welcome">Welcome!</h2>
            <p>I am <b>Giuseppe Sorrentino</b> and this is my personal digital playground.</p>
          </div>
        </div>
        <div class="home grid">
          <div class="unit whole">
            <div class="intro-container">
              <h1 class="intro-title"><span>I am a</span> <Link to="/blog" state={{ filterLink: 'project' }}>developer</Link></h1>
              <p class="intro-paragraph">I work as User Interface Engineer II and Hotels.com. I write useful and usable code.</p>
            </div>
            <div class="intro-container">
              <h1 class="intro-title"><span>I am a</span> <Link to="/portfolio">UX specialist</Link></h1>
              <p class="intro-paragraph">I design useful and beautiful wireframes and mockups. I do user research as well.</p>
            </div>

            <div class="intro-container">
              <h1 class="intro-title"><span>I am a </span><Link to="/blog" state={{ filterLink: 'post' }}>writer</Link><span> and a </span><Link to="/blog" state={{ filterLink: 'slides' }}>speaker</Link></h1>
              <p class="intro-paragraph">I talk and write about ux, agile and development.</p>
            </div>
            
            <div class="intro-container">
              <h1 class="intro-title"><span>Contact</span> <Link to="/aboutme">me</Link>!</h1>
            </div>

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