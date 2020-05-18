const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // CREATE HOMEPAGE
  const homepage = await graphql(`
    {
      allPrismicHomepage {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const homepageTemplate = path.resolve("src/templates/homepage.jsx")

  homepage.data.allPrismicHomepage.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: homepageTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  // CREATE HOMEPAGE

  // CREATE PROJECT
  const project = await graphql(`
    {
      allPrismicProject {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const projectTemplate = path.resolve("src/templates/project.jsx")

  project.data.allPrismicProject.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: projectTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  // CREATE PROJECT END

  // CREATE POST
  const post = await graphql(`
    {
      allPrismicPost {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const postTemplate = path.resolve("src/templates/post.jsx")

  post.data.allPrismicPost.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  // CREATE POST END

  // CREATE CONTACT
  const contact = await graphql(`
    {
      allPrismicContact {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const contactTemplate = path.resolve("src/templates/contact.jsx")

  contact.data.allPrismicContact.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: contactTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  // CREATE CONTACT END

  // CREATE ABOUT
  const about = await graphql(`
    {
      allPrismicAbout {
        edges {
          node {
            id
            uid
          }
        }
      }
    }
  `)

  const aboutTemplate = path.resolve("src/templates/about.jsx")

  about.data.allPrismicAbout.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.uid}`,
      component: aboutTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
  // CREATE ABOUT END
}