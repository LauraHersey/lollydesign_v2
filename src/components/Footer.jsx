import React from 'react'
import { Link } from "gatsby"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// NEED TO IMPORT REACT BS COL ETC 

class Footer extends React.Component {
  render () {
    return (
      <footer>
        <Row>
        <Col md={6}>
          <h5>Connect with Lollydesign</h5>
          <ul>
            <li><Link to='/test/'>Test</Link></li>
            <li><Link to='/test/'>Test</Link></li>
            <li><Link to='/test/'>Test</Link></li>
            <li><Link to='/test/'>Test</Link></li>
          </ul>
        </Col>
        <Col md={6}>
          <h5>Useful links</h5>
          <ul>
            <li><Link to='/test/'>Test</Link></li>
            <li><Link to='/test/'>Test</Link></li>
            <li><Link to='/test/'>Test</Link></li>
            <li><Link to='/test/'>Test</Link></li>
          </ul>
        </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer