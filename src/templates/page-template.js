import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import { CSSTransition } from 'react-transition-group'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Template = (props) => {
  const { markdownRemark } = props. data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark

  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    // Update the document title using the browser API
    setAnimation(true)
  });

  return (
    <Layout location={props.location}>
      <SEO title={frontmatter.title} keywords={[`blog`, `rightright`, `giuseppe sorrentino`]} />
      <CSSTransition in={animation} timeout={500} classNames="animation">
        <div class="home grid">
          <div
          class="unit whole"
          dangerouslySetInnerHTML={{ __html: html }}
          >
          </div>
        </div>
      </CSSTransition>
    </Layout>
  )
}

export default Template

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`