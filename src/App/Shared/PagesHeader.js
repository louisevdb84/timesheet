import React from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container
} from "reactstrap";

import pagesRoutes from "../../routes/index.js";

class PagesHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.activeRoute.bind(this);
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // verifies if routeName is the one active (in browser input)
  activeRoute(routeName) {
    console.log(routeName);
    console.log(this.props);
    if (this.props.location) {
      return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";  
    }   
    
  }
  render() {
    return (
      <Navbar
        expand="lg"
        className="bg-white navbar-absolute pagesHeaderBody">
        <Container>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <NavbarToggler onClick={this.toggle}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
            <Link to="/" className="navbar-brand">
              Timesheet
            </Link>
          </div>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {pagesRoutes.map((prop, key) => {
                if (prop.redirect) return null;
                return (
                  <NavItem key={key} className={this.activeRoute(prop.path)}>
                    <Link to={prop.path} className="nav-link">
                      <i className={"now-ui-icons " + prop.icon} /> {prop.short}
                    </Link>
                  </NavItem>
                );
              })}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default PagesHeader;


