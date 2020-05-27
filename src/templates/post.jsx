import React from 'react'
import { graphql } from "gatsby"

import Layout from '../components/Layout.jsx';
import BlogDisplay from '../components/Blog.jsx';

const Post = ({ data: { prismicPost } }) => {
  const { data } = prismicPost
  return (
    <Layout>
      <React.Fragment>
        <h1 dangerouslySetInnerHTML={{ __html: data.post_title.text }} />
        <div dangerouslySetInnerHTML={{ __html: data.post_body.text }} />
        <BlogDisplay blogData={data.body}/>
      </React.Fragment>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostBySlug($uid: String!) {
    prismicPost(uid: { eq: $uid }) {
      uid
      data {
        post_title {
          text
        }
        post_body {
          text
        }
        body {
          __typename
          ... on PrismicPostBodyBlogSnippet {
            items {
              snippet_title {
                text
              }
              snippet_intro {
                html
              }
              snippet_post_date
              snippet_category {
                text
              }
              snippet_poster
              snippet_image {
                url
              }
            }
          }
        }
      }
    }
  }
`