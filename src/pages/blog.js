import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { OutboundLink } from 'gatsby-plugin-google-analytics'
import { Location } from '@reach/router';

import Layout from "../components/layout"
import SEO from "../components/seo"
import BlogFilter from "../components/blog_filter"

class IndexPage extends React.Component {
  state = {
    edges: this.props.data.allMarkdownRemark.edges, 
    //filteredEdges: this.props.data.allMarkdownRemark.edges
  }

  filterEdges = (filter) => {
    // const tempEdges = this.state.edges.filter((edge) => {
    //   if (filter == 'all') {
    //     return true
    //   } else {
    //     return edge.node.frontmatter.type == filter
    //   }
    // })
    this.setState({
      //filteredEdges: tempEdges,
      filterLink: filter
    })
  }

  render() {
    return (
      <Location>
        {({ location }) => (
          <Layout>
            <SEO title="Blog" keywords={[`blog`, `rightright`, `giuseppe sorrentino`]} />

            <div class="home grid">

              <div class="unit whole">

                <h1>Blog</h1>

                <div class="post-container">
                  <BlogFilter
                    value={'all'}
                    onHeaderClick={this.filterEdges}
                    filterLink={location.state.filterLink}
                  />

                  <BlogFilter
                    value={'post'}
                    onHeaderClick={this.filterEdges}
                    filterLink={location.state.filterLink}
                  />

                  <BlogFilter
                    value={'slides'}
                    onHeaderClick={this.filterEdges}
                    filterLink={location.state.filterLink}
                  />

                  <BlogFilter
                    value={'project'}
                    onHeaderClick={this.filterEdges}
                    filterLink={location.state.filterLink}
                  />

                  <BlogFilter
                    value={'gist'}
                    onHeaderClick={this.filterEdges}
                    filterLink={location.state.filterLink}
                  />

                </div>


                {this.state.edges.map(link => {

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
                      <div className={"post-container " + (location.state.filterLink == link.node.frontmatter.type || location.state.filterLink == "all" ? 'show' : 'hidden')}>

                        {label}

                        <span class="post-meta">{link.node.frontmatter.date}</span>

                        <h2 class="post-title">
                          <OutboundLink class="post-link" href={link.node.frontmatter.anchor} target="_blank">{link.node.frontmatter.title}</OutboundLink>
                        </h2>

                        <span class="post-description"><i>{link.node.frontmatter.desc} </i></span>
                      </div>
                    )}

                  )}
              </div>
            </div>
          </Layout>
        )}
      </Location>
    )
  }
}

export default () => <StaticQuery
  query={pageQuery}
  render={data => <IndexPage data={data}/>}
/>

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