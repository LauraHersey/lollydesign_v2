import React from 'react'
import { Link } from "@reach/router"

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Navigation extends React.Component {
  render () {
    return (
      <header>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
          <Link to="/">Lollydesign</Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto navbar-links">
              <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/project">Projects</Link></li>
                <li><Link to="/services">Our Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </header>
    )
  }
}

export default Navigation