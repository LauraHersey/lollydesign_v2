import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout.jsx';
import CardDisplay from '../components/Card.jsx';

const Project = ({ data: { prismicProject } }) => {
  const { data } = prismicProject
  return (
    <Layout>
      <React.Fragment>
        <h1 dangerouslySetInnerHTML={{ __html: data.project_title.text }} />
          <CardDisplay images={['alton.png', 'warwick.png', 'alton.png']} />
        <div dangerouslySetInnerHTML={{ __html: data.project_description.text }} />
      </React.Fragment>
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectBySlug($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      data {
        project_title {
          text
        }
        project_description {
          text
        }
      }
    }
  }
`