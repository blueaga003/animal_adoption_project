import React, { Component } from "react";
import Login from "./login";
//import "./Login.css";

export default class LoginContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      userResponse: 0
    };

    this.validateForm = this.validateForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
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
    fetch('http://localhost:5000/login', {
      credentials:'include',
      method:'POST', 
      body:JSON.stringify(this.state),
      headers: {
        'Accept':'application/json', 
        'Content-Type':'application/json'
      }
    }).then(response => response.json())
      .then(responseAnswer  =>{
        this.setState({userResponse: responseAnswer});

      //Add catch for failure
    })
  }
  handleResponse = event => {
    if (this.state.userResponse['user'] != null) {
      this.props.checkIfLoggedIn()
      return this.props.history.push("/petSearch")
    }
    else if (this.state.userResponse['error'] != null){
        return this.state.userResponse['error']
    }
  }
  render() {
    return (
    <Login 
      email={this.state.email}
      password={this.state.password}
      handleChange={this.handleChange}
      validateForm={this.validateForm}
      handleSubmit={this.handleSubmit}
      handleResponse={this.handleResponse}
    />
    );
  }
}
