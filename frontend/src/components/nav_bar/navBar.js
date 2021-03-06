import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import './navBar.css'
class NavBar extends Component {

  renderNavBar = (event) => {
    if (this.props.loggedIn === true) {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/profile">Profile</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Log Out</NavLink>
          </NavItem>
        </Nav>
      );
    }
    else {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/register">Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        </Nav>
      );
    }
  }

render() {
  return (
    <div>
      <Navbar color="faded" light expand="md">
        <NavbarBrand href="/">HoundDog</NavbarBrand>
        {this.renderNavBar()}
      </Navbar>
    </div>
  );
}
}

export default NavBar;
