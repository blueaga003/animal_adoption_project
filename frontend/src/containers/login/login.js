import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import "../signup/signUp.css";

export default class Login extends Component {

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.props.handleSubmit}>
          <FormGroup controlId="email" bsSize="large" className='UserEntry'>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large" className='UserEntry'>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.props.password}
              onChange={this.props.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            className="Button"
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
        <div className="UserActivity">
          {this.props.handleResponse()}
        </div>
      </div>
    );
  }
}
