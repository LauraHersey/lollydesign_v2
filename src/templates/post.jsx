import React from 'react'
import { graphql } from "gatsby"

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <React.Fragment>
      <h1 dangerouslySetInnerHTML={{ __html: data.post_body.text }} />
    </React.Fragment>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        post_body {
          text
        }
      }
    }
  }
`