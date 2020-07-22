import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class BlogDisplay extends React.Component {
  render () {
    const { blogData } = this.props

    return (
      <div className="row">
        {blogData.map((post, index) =>  {
          return (
            <div className='col-md-12' key={index}>
              <div className='d-sm-flex flex-sm-column pos-rel mb-3'>
                <Card>
                  <Card.Body>
                  { post.items[0].snippet_image.url &&
                    <Card.Img variant="top" src={post.items[0].snippet_image.url} alt="" className="img-fluid" />
                  }
                    <Card.Title><h1 dangerouslySetInnerHTML={{ __html: post.items[0].snippet_title.text }} /></Card.Title>
                    <Card.Text><span dangerouslySetInnerHTML={{ __html: post.items[0].snippet_intro.html }} /></Card.Text>
                    <p>LINK TO LINKEDIN AND FB POSTS ON THIS PAGE TOO???????</p>
                    <p>CATEGORY: {post.items[0].snippet_category.text}</p>
                    <p>DATE: {post.items[0].snippet_post_date}</p>
                    <p>POSTER: {post.items[0].snippet_poster}</p>
                  </Card.Body>
                </Card>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default BlogDisplay
