import React, { Component } from "react";
import { Form, Button, FormGroup, FormControl} from "react-bootstrap";
import "./login.css";
import "../signup/signUp.css";

export default class Login extends Component {

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.props.handleSubmit}>
          <FormGroup controlId="email" bssize="large" className='UserEntry'>
           <Form.Label>Email</Form.Label>
            <FormControl
              autoFocus
              type="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bssize="large" className='UserEntry'>
           <Form.Label>Password</Form.Label>
            <FormControl
              value={this.props.password}
              onChange={this.props.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            className="Button"
            block
            bssize="large"
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
