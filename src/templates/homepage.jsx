import React from 'react'
import { graphql } from "gatsby"
import Row from 'react-bootstrap/Row';

import Layout from '../components/Layout.jsx';

const Homepage = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage
  return (
    <Layout>
      <Row>
        <div className='col-md-6'>
        <h1 dangerouslySetInnerHTML={{ __html: data.hero_title.html }} />
        <div dangerouslySetInnerHTML={{ __html: data.content.html }} />
        </div>
        <div className='col-md-6'>
          TEST
        </div>
      </Row>
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