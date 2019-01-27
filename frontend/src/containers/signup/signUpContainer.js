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
      userResponse: 0,
    
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

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleDataBind = (dataFromStates) => {
    this.setState(dataFromStates)
    console.log("Does something")
    // Put data here
  } //Do I need a comma after this?

  handleSubmit(event) {
    event.preventDefault();
    fetch('http://localhost:5000/register', {
      credentials:'include',
      method:'POST',
      body:JSON.stringify(this.state),
      headers: {
        'Accept':'application/json', 
        'Content-Type':'application/json',
      }
    }).then(response  => response.json())
      .then(responseAnswer => {
         this.setState({userResponse: responseAnswer});
          console.log("print 2")
          localStorage.setItem("Token", responseAnswer['access_token'])
          console.log(this.state.userResponse) //TODO: Remove
    
      //Add catch for failure
    })

   // .catch((error) => {this.setState({isLoading: true, error})});
    
    // Keep console.log for testing
    console.log(this.props)
  };

  handleResponse = event => {
   
   console.log("this.state.userResponse['error'] "  + this.state.userResponse['error'])
   console.log("this.state.userResponse Handle " + this.state.userResponse)
   if(this.state.userResponse['user'] != null) {
      this.setState({authCookie : this.state.userResponse['access_token']})
      console.log("authCookie" + this.state.authCookie)
      // Change path
      //return "The user " + this.state.userResponse['user'] + " has been created!"
      // return <Redirect to="/" />
      this.props.history.push("/petSearch")
    }
   else if (this.state.userResponse['error'] != null) {

    return this.state.userResponse['error']
    }
  }
//if this.state.data (wait, from constructor, provide feedback), conditional render
  render() {
    console.log('print 1')
    console.log(this.state.userResponse)
    return (
      <SignUp
        email={this.state.email}
        password={this.state.password}
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        species={this.state.species}
        animalActivityLevels={this.state.animalActivityLevels}
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

// Passing around values new user state, to state for checkBoxes
