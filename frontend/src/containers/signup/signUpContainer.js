import React, { Component } from 'react';
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

  handleSubmit(event){
    event.preventDefault();
    fetch('http://localhost:5000/signup', {
      credentials:'include',
      method:'POST',
      body:'data'
    })
    .then(response => response.json())
    .then(() => {
      this.props.history.goBack();
    })
    .catch((error) => {this.setState({isLoading: true, error})});
    
    // Keep console.log for testing
    console.log(this.props)
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
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignUpContainer;
