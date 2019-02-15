module.exports = {
  siteMetadata: {
    title: "right right",
    author: "@glsorre",
    description: "i am giuseppe sorrentino and this is my personal digital playground",
    siteUrl: "rightrght.me",
    menu: [
      {
        label: 'portfolio',
        path: '/portfolio'
      },
      {
        label: 'about me',
        path: '/aboutme'
      },
    ],
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-default",
        short_name: "starter",
        start_url: "/",
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: "src/images/gatsby-icon.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/blog/links`,
        name: "links",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/blog/pages`,
        name: "pages",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1145,
              quality: 50,
              wrapperStyle: "margin-top:14px;",
              linkImagesToOriginal : false,
              backgroundColor: "transparent"
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.desc,
                  date: edge.node.frontmatter.date,
                  url: edge.node.frontmatter.anchor,
                  guid: edge.id,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              query {
                allMarkdownRemark(
                  filter: {fileAbsolutePath: {regex: "/(links)/"}}
                  sort: { order: DESC, fields: [frontmatter___date] }) 
                  {
                  edges {
                    node {
                      id
                      frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        title
                        desc
                        anchor
                      }
                    }
                  }
                }
              }
            `,
            output: "/feed.xml",
            title: "right|right RSS Feed",
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-132556016-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: false,
        // Avoids sending pageview hits from custom paths
        exclude: [],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Enables Google Optimize Experiment ID
        experimentId: "YOUR_GOOGLE_EXPERIMENT_ID",
        // Set Variation ID. 0 for original 1,2,3....
        variationId: "YOUR_GOOGLE_OPTIMIZE_VARIATION_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "rightright.me",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    //'gatsby-plugin-offline',
  ],
}
