import React from 'react'
import { graphql } from "gatsby"
import Row from 'react-bootstrap/Row';
import { OutboundLink } from 'gatsby-plugin-gtag'

import Layout from '../components/Layout.jsx';
import CardDisplay from '../components/Card.jsx';

const Homepage = ({ data: { prismicHomepage } }) => {
  const { data } = prismicHomepage

  // NEED TO LOOK AT A LOOP OVER THE EXAMPLES SLICE 

  console.log('DATA:', data.body) 
  return (
    <Layout>
      <Row>
        <div className='col-md-12'>
          <h1 dangerouslySetInnerHTML={{ __html: data.page_title.text }} />
          <div dangerouslySetInnerHTML={{ __html: data.intro_content.html }} />
        </div>
        <div className='col-md-12'>
          <CardDisplay allData={data.body} displayType='PrismicHomepageBodyHomepageThumbs' />
        </div>
      </Row>
      <Row>
        <div className='col-md-12'>
          <p>Creative Marketing Services</p>
          <p>Lollydesign is the perfect marketing partner for you</p>
          <p>Brand awarness, launch new products, enter new markets, reach your potential</p>
          <p><OutboundLink href="https://www.test.com">TEST GA</OutboundLink></p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut vulputate eros, ut iaculis nulla. Donec non tellus vel erat cursus dignissim. Donec sed est est. Vestibulum sed tellus facilisis, vulputate odio eu, malesuada tellus. Curabitur ullamcorper nec metus a pharetra. Integer non felis molestie, commodo sem et, sollicitudin enim. Quisque ipsum ex, suscipit ut metus at, feugiat sodales erat. Praesent hendrerit porta nisl, sed eleifend orci. Mauris malesuada odio justo, vitae hendrerit diam rhoncus ac. Maecenas at ante eu purus volutpat iaculis gravida iaculis arcu. Sed at est sed felis tempus semper in vel lorem. Duis aliquet, risus et iaculis auctor, augue orci gravida metus, in euismod sem orci at massa. Maecenas maximus ut ante vel dapibus. Duis varius turpis quam, ut congue sem facilisis eget. Fusce commodo diam ac leo condimentum, quis dictum diam iaculis.</p>
        </div>
      </Row>
      <Row>
        <div className='col-md-4'>
          <p className='text-right'>What have we been working on.....</p>
        </div>
        <div className='col-md-8'>
          <CardDisplay allData={data.body} displayType='PrismicHomepageBodyHomepageExamplesThumbs' />
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
                text
                html
              }
              thumb_intro {
                text
                html
              }
            }
          }
          ... on PrismicHomepageBodyHomepageExamplesThumbs {
            items {
              examples_image {
                url
              }
              examples_title {
                text
                html
              }
              examples_intro {
                text
                html
              }
              examples_link {
                url
              }
            }
          }
        }
      }
    }
  }
`