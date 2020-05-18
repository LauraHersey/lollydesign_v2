import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout.jsx';

const About = ({ data: { prismicAbout } }) => {
  const { data } = prismicAbout
  return (
    <Layout>
      <React.Fragment>
        <h1 dangerouslySetInnerHTML={{ __html: data.page_title.text }} />
        <div dangerouslySetInnerHTML={{ __html: data.intro_copy.text }} />
      </React.Fragment>
    </Layout>
  )
}

export default About


export const pageQuery = graphql`
  query AboutBySlug($uid: String!) {
    prismicAbout(uid: { eq: $uid }) {
      uid
      data {
        page_title {
          text
        }
        intro_copy {
          text
        }
      }
    }
  }
`