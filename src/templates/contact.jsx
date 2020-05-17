import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout.jsx';

const Contact = ({ data: { prismicContact } }) => {
  const { data } = prismicContact
  return (
    <Layout>
      <React.Fragment>
        <h1 dangerouslySetInnerHTML={{ __html: data.page_title.text }} />
        <div dangerouslySetInnerHTML={{ __html: data.intro.text }} />
      </React.Fragment>
    </Layout>
  )
}

export default Contact

export const pageQuery = graphql`
  query ContactBySlug($uid: String!) {
    prismicContact(uid: { eq: $uid }) {
      uid
      data {
        page_title {
          text
        }
        intro {
          text
        }
      }
    }
  }
`