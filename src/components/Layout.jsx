import React from "react";

import Navigation from './Nav.jsx'
import Footer from './Footer.jsx'
import "../styles/main.scss";

class Layout extends React.Component {

    render() {
        const { children } = this.props;

        return (
            <React.Fragment>
              <Navigation />
              <div className="content">
                {children}
              </div>
              <Footer />
            </React.Fragment>
        );
    }
}

export default Layout;