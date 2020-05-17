import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

// Need to defend against errors in the image array passed in!!!!
// RATHER THAN PASS THIS ARRAY IN FROM THE COMPONENT (UNLESS THAT IS WHAT WE WANT) THEN PULL IN AN ARRAY FROM PRISMIC

class CardDisplay extends React.Component {
  render () {
    const { images } = this.props

    const title = (image) => {
      let cleanedTitle = image.replace(/\.[^/.]+$/, '')
      return cleanedTitle.charAt(0).toUpperCase() + cleanedTitle.slice(1);
    }

    const card = images.map((image, index) => 
        <div className='col-xs-12 col-sm-6 d-sm-flex'>
          <div className='d-sm-flex flex-sm-column pos-rel mb-3'>
            <Card>
              <Card.Img variant="top" src="" alt={title} />
              <Card.Body>
                <Card.Title>Project Title - {title(image)}</Card.Title>
                <Card.Text>We can put some quick intro text relevant to the Project we will link to</Card.Text>
                <Button href="#" className="btn btn-primary cta" data-action="Clicked" data-category="Card Links" data-label={title(image) + ' - About Card'}>Go to this project</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
    )

    return (
      <div className="row">
        {card}
      </div>
    )
  }
}

export default CardDisplay
