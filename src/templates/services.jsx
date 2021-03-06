import React from 'react'
import { graphql } from "gatsby"
import Row from 'react-bootstrap/Row';

import Layout from '../components/Layout.jsx';

const Services = ({ data: { prismicServices } }) => {
  const { data } = prismicServices
  return (
    <Layout>
      <React.Fragment>
        <h1 dangerouslySetInnerHTML={{ __html: data.page_title.text }} />
        <div dangerouslySetInnerHTML={{ __html: data.intro_copy.text }} />
        <Row>
          <div className='col-md-12'>
            <p>Grow your market share</p>
          </div>
        </Row>
      </React.Fragment>
    </Layout>
  )
}

export default Services


export const pageQuery = graphql`
  query ServicesBySlug($uid: String!) {
    prismicServices(uid: { eq: $uid }) {
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