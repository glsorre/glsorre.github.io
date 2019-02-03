const path = require("path")

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`src/templates/page-template.js`)

  return graphql(`
    query {
        allMarkdownRemark(
        filter: {fileAbsolutePath: {regex: "/(pages)/"}}
        sort: { order: DESC, fields: [frontmatter___date] }
        ) {
        edges {
            node {
            id
            frontmatter {
                title
                path
            }
            }
        }
        }
    }
    `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {},
      })
    })
  })
}