import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CardDisplay extends React.Component {
  render () {
    const { allData, displayType } = this.props

    console.log('IN CARD ALL DATA:', allData)

    return (
      <div className="row">
        {allData.map((item) =>  {
          console.log('IN CARD ALL DATA:', item.__typename)

          // WE NEED DIFFERENCES IN VALUES FOR DIFFERENT USES BUT NEED TO LOOK AT THIS FURTHER

          let intro = ''
          let image = ''
          let title = ''
          let link = ''

          if (displayType === 'PrismicHomepageBodyHomepageThumbs' || 'PrismicProjectBodyLandingPageThumbs') {
            console.log('THUMBS MATCH')
            intro = item.items[0].thumb_intro
            image = item.items[0].thumb_image
            title = item.items[0].thumb_title
            link = item.items[0].thumb_link
          }

          if (displayType === 'PrismicHomepageBodyHomepageExamplesThumbs') {
            console.log('EXAMPLES MATCH')
            intro = null
            image = item.items[0].examples_image
            title = item.items[0].examples_title
            link = item.items[0].examples_link
          }



          return (
            <React.Fragment>
              {title &&
                <div className='col-xs-12 col-sm-3'>
                  <div className='d-sm-flex flex-sm-column pos-rel mb-3'>
                    <Card>
                      {image &&
                        <Card.Img variant="top" src={image.url} alt="" className="img-fluid" />
                      }
                      <Card.Body>
                        {title &&
                          <Card.Title><h4 dangerouslySetInnerHTML={{ __html: title.text }} /></Card.Title>
                        }
                        {intro &&
                          <Card.Text>{intro.text}</Card.Text>
                        }
                        {link && 
                          <Button href={link.url} className="btn btn-primary cta" data-action="Clicked" data-category="Card Links" data-label=' - About Card'>Go to this project</Button>
                        }
                      </Card.Body>
                    </Card>
                  </div>
                </div>
              }
            </React.Fragment>
          )
        })}
      </div>
    )
  }
}

export default CardDisplay
