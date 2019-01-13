import React, { Component } from 'react';
import SignUp from './signUp';

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
      userResponse: 0
    };

    this.validateForm = this.validateForm.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0 && this.state.firstName.length > 0 && this.state.lastName.length > 0;
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
      body:JSON.stringify(this.state),
      headers: {
        'Accept':'application/json', 
        'Content-Type':'application/json'
      }
    }).then(response  => response.text())
       .then(responseAnswer =>{
        this.setState({userResponse: responseAnswer});
        console.log(this.state.userResponse) //TODO: Remove
    
      //Add catch for failure
    })
   // .catch((error) => {this.setState({isLoading: true, error})});
    
    // Keep console.log for testing
    console.log(this.props)
  };
//if this.state.data (wait, from constructor, provide feedback), conditional render
  render() {
    console.log(this.state.userResponse)
    return (
      <SignUp
        email={this.state.email}
        password={this.state.password}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        species={this.state.species}
        animalActivityLevels={this.state.animaActivityLevels}
        gender={this.state.gender}
        validateForm={this.validateForm}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

export default SignUpContainer;
