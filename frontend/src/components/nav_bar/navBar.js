import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavBar extends Component {
constructor(props) {
  super(props);

  this.toggle = this.toggle.bind(this);
  this.state = {
     isOpen: false
   };
 }
toggle() {
  this.setState({
    isOpen: !this.state.isOpen
  });
}
render() {
  return (
    <div>
      <Navbar color="faded" light toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="/">HoundDog</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default NavBar;
