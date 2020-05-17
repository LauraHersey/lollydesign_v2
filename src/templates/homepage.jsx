import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout.jsx';

const Homepage = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage
  return (
    <Layout>
      <React.Fragment>
        <h1 dangerouslySetInnerHTML={{ __html: data.hero_title.html }} />
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
      </React.Fragment>
    </Layout>
  )
}

export default Homepage

export const pageQuery = graphql`
  query HomepageBySlug($uid: String!) {
    prismicHomepage(uid: { eq: $uid }) {
      uid
      data {
        hero_title {
          html
        }
        content {
          html
        }
      }
    }
  }
`