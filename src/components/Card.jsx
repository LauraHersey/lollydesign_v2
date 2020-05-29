import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class CardDisplay extends React.Component {
  render () {
    const { allData } = this.props

    console.log('ALL DATA:', allData)

    return (
      <div className="row">
        {allData.map((item) =>  {
          return (
            <React.Fragment>
              {item.items[0].thumb_intro &&
                <div className='col-xs-12 col-sm-3'>
                  <div className='d-sm-flex flex-sm-column pos-rel mb-3'>
                    <Card>
                      {item.items[0].thumb_image &&
                        <Card.Img variant="top" src={item.items[0].thumb_image.url} alt="" className="img-fluid" />
                      }
                      <Card.Body>
                        {item.items[0].thumb_title &&
                          <Card.Title><h1 dangerouslySetInnerHTML={{ __html: item.items[0].thumb_title.html }} /></Card.Title>
                        }
                        <Card.Text><p dangerouslySetInnerHTML={{ __html: item.items[0].thumb_intro.html }} /></Card.Text>
                        {item.items[0].thumb_link && 
                          <Button href={item.items[0].thumb_link.url} className="btn btn-primary cta" data-action="Clicked" data-category="Card Links" data-label=' - About Card'>Go to this project</Button>
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
