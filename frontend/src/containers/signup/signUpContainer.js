import React, { Component } from 'react';
import SearchFormContainer from '../searchFormContainer';
import SignUp from './signUp';

// Import Components

class SignUpContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      species: [],
      animal_activity_levels: [],
      gender: [],
    };

    this.validateForm = this.validateForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleAll = this.handleAll.bind(this)
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleAll(event){
    //event.preventDefault();
    fetch('http://localhost:5000/signup')
    console.log("call")
  };

  render() {
    return (
      <SignUp
        email={this.state.email}
        password={this.state.password}
        species={this.state.species}
        animal_activity_levels={this.state.animal_activity_levels}
        gender={this.state.gender}
        validateForm={this.validateForm}
        handleChange={this.handleChange}
        handleAll={this.handleAll}
      />
    );
  }
}

export default SignUpContainer;
