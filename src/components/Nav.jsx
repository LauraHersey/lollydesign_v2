import React from 'react'
import { Link } from "@reach/router"
import trackingHelpers from '../helpers/trackingHelpers'

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends React.Component {
  render () {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Link to="/" onClick={e => trackingHelpers.eventTrack('Nav Link', 'Click', 'Home')}>Lollydesign</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto navbar-links">
              <ul>
                <li><Link to="/about" onClick={e => trackingHelpers.eventTrack('Nav Link', 'Click', 'About')}>About</Link></li>
                <li><Link to="/project" onClick={e => trackingHelpers.eventTrack('Nav Link', 'Click', 'Projects')}>Projects</Link></li>
                <li><Link to="/services" onClick={e => trackingHelpers.eventTrack('Nav Link', 'Click', 'Services')}>Our Services</Link></li>
                <li><Link to="/contact" onClick={e => trackingHelpers.eventTrack('Nav Link', 'Click', 'Contact')}>Contact</Link></li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Navigation