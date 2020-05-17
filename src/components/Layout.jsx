import React from "react";
import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';

import Navigation from './Nav.jsx'
import Footer from './Footer.jsx'
import "../styles/main.scss";

class Layout extends React.Component {

    render() {
        const { children } = this.props;

        return (
            <Container>
              <Navigation />
              <div className="content mt-5">
              {children}
              </div>
              <Footer />
            </Container>
        );
    }
}

export default Layout;