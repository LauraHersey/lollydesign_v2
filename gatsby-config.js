/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env`,
})

module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `david-hersey`,
        accessToken: process.env.GATSBY_BUILD_KEY,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          homepage: require('./src/schemas/homepage.json'),
          project: require('./src/schemas/project.json'),
          post: require('./src/schemas/post.json'),
          contact: require('./src/schemas/contact.json'),
          about: require('./src/schemas/about.json')
        }
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
}
