import React, { Component } from "react";
import Login from "./login";
//import "./Login.css";

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };

    this.validateForm = this.validateForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
    <Login 
      email={this.state.email}
      password={this.state.password}
      handleChange={this.handleChange}
      validateForm={this.validateForm}
    //  handleSubmit={this.handleSubmit}
    />
    );
  }
}
