/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */



module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `david-hersey`,
        accessToken: GATSBY_BUILD_KEY,
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
