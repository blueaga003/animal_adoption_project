import React, { Component } from "react";
import SignUp from "./signUp";

// Import Components

class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      species: [],
      animalActivityLevels: [],
      gender: [],
      userResponse: 0,
      validateErrorMessage: ""
    };

    this.validateForm = this.validateForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleResponse = this.handleResponse.bind(this)
    this.handleDataBind = this.handleDataBind.bind(this)
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.firstName.length > 0 && this.state.lastName.length > 0;
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleDataBind(dataFromStates) {
    this.setState(dataFromStates);
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("http://localhost:5000/register", {
      credentials:"include",
      method:"POST",
      body:JSON.stringify(this.state),
      headers: {
        "Accept":"application/json", 
        "Content-Type":"application/json",
      }
    }).then(response  => response.json())
      .then(responseAnswer => {
         this.setState({userResponse: responseAnswer});
          localStorage.setItem("Token", responseAnswer["access_token"]);
          this.handleResponse();
      //Add catch for failure
    })
  };

  handleResponse(event) {
   if(this.state.userResponse["user"] != null) {
      this.setState({authCookie : this.state.userResponse["access_token"]})
      this.props.checkIfLoggedIn();
      this.props.history.push("/petSearch");
    }
   else if (this.state.userResponse["error"] != null) {
     this.setState({validateErrorMessage: this.state.userResponse["error"]});
     return this.state.validateErrorMessage
   }
  }
  render() {
    return (
      <SignUp
        email={this.state.email}
        password={this.state.password}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        species={this.state.species}
        animalActivityLevels={this.state.animalActivityLevels}
        validateErrorMessage={this.state.validateErrorMessage}
        gender={this.state.gender}

        validateForm={this.validateForm}
        handleChange={this.handleChange}
        handleResponse={this.handleResponse}
        handleDataBind={this.handleDataBind}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignUpContainer;
