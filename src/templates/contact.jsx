import React from 'react'
import { graphql } from "gatsby"
import Row from 'react-bootstrap/Row';

import Layout from '../components/Layout.jsx';
import ContactForm from '../components/ContactForm.jsx';

const Contact = ({ data: { prismicContact } }) => {
  const { data } = prismicContact
  return (
    <Layout>
      <Row>
        <div className='col-md-6'>
          <ContactForm />
        </div>
        <div className='col-md-6'>
          <h1 dangerouslySetInnerHTML={{ __html: data.page_title.text }} />
          <div dangerouslySetInnerHTML={{ __html: data.intro.text }} />
        </div>
      </Row>
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