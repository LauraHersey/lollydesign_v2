/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


// ENIVRONMENT NOT SETTING/PULLING CORRECTLY - NEED TO SORT THIS FOR WORKING AND DEPLOY
// HAD TO ADD THE ENVIROMENT RATHER THAN USING THE NODE_ENV
// `.env.${process.env.NODE_ENV}`
require("dotenv").config({
  path: `.env.production`,
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `david-hersey`,
        accessToken: `${process.env.GATSBY_BUILD_KEY}`,
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
  ],
}
