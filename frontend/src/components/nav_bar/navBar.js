import React, { Component } from 'react';
import { Collapse, Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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
        <NavbarBrand href="/">HoundDog</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/signup">Signup</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
}

export default NavBar;
