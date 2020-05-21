import React from 'react'
import { Link } from "gatsby"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import FacebookLogo from "../assets/fbook_logo.svg"
import LinkedInLogo from "../assets/linkedin_logo.svg"

class Footer extends React.Component {

  render () {
    return (
      <footer>
        <Row>
          <Col md={4}>
            <h5>Connect with Lollydesign</h5>
            <span className="social-icons">
                <Link to='#'>
                  <img src={FacebookLogo} className="fbLogo" />
                </Link>
                <Link to='#'>
                  <img src={LinkedInLogo} className="linkedinLogo" />
                </Link>
            </span>
          </Col>
          <Col md={4}>
            <h5>Useful links</h5>
            <ul>
              <li><Link to='#'>Test</Link></li>
              <li><Link to='#'>Test</Link></li>
              <li><Link to='#'>Test</Link></li>
              <li><Link to='#'>Test</Link></li>
            </ul>
          </Col>
          <Col md={4} className="copyright">
            <h6>Designed and built by Lollydesign 2020</h6>
          </Col>
        </Row>
      </footer>
    )
  }
}

export default Footer