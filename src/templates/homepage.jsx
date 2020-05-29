import React from 'react'
import { graphql } from "gatsby"
import Row from 'react-bootstrap/Row';

import Layout from '../components/Layout.jsx';
import CardDisplay from '../components/Card.jsx';

const Homepage = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage
  return (
    <Layout>
      <Row>
        <div className='col-md-12'>
          <h1 dangerouslySetInnerHTML={{ __html: data.page_title.text }} />
          <div dangerouslySetInnerHTML={{ __html: data.intro_content.html }} />
        </div>
        <div className='col-md-12'>
          <CardDisplay allData={data.body} />
        </div>
      </Row>
        <div className='col-md-12'>
        </div>
      <Row>
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
        page_title {
          text
        }
        intro_content {
          text
        }
        body {
          __typename
          ... on PrismicHomepageBodyHomepageThumbs {
            items {
              thumb_title {
                html
              }
              thumb_intro {
                html
              }
            }
          }
        }
      }
    }
  }
`