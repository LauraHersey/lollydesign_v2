import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CardDisplay extends React.Component {
  render () {
    const { allData } = this.props

    return (
      <div className="row">
        {allData.map((project) =>  {
          return (
            <div className='col-xs-12 col-sm-6 d-sm-flex'>
              <div className='d-sm-flex flex-sm-column pos-rel mb-3'>
                <Card>
                  <Card.Img variant="top" src={project.items[0].thumbnail_image.url} alt="" className="img-fluid" />
                  <Card.Body>
                    <Card.Title><h1 dangerouslySetInnerHTML={{ __html: project.items[0].thumb_title.html }} /></Card.Title>
                    <Card.Text><p dangerouslySetInnerHTML={{ __html: project.items[0].thumb_intro.html }} /></Card.Text>
                    <Button href={project.items[0].thumb_link.url} className="btn btn-primary cta" data-action="Clicked" data-category="Card Links" data-label=' - About Card'>Go to this project</Button>
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

export default CardDisplay
