import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import AnimalPreferencesContainer from '../animalPreferences/animalPreferencesContainer';
import './signUp.css'

class SignUp extends Component {

 // constructor(props) {
 //   super(props)
 // };

  render() { 
    return (
      <div className='SignUp'>
        <form onSubmit={this.props.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.props.password}
              onChange={this.props.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="firstName" bsSize="large">
            <ControlLabel>First Name</ControlLabel>
            <FormControl
              value={this.props.firstName}
              onChange={this.props.handleChange}
              type="firstName"
            />
          </FormGroup>
          <FormGroup controlId="lastName" bsSize="large">
            <ControlLabel>Last Name</ControlLabel>
            <FormControl
              value={this.props.lastName}
              onChange={this.props.handleChange}
              type="lastName"
            />
          </FormGroup>
          <AnimalPreferencesContainer
             handeDataBind={this.props.handeDataBind}
          />
          <Button
            onClick={this.props.handleSubmit}
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
          >
            Signup
          </Button>
        </form> 
        <div className="UserActivity">
          {this.props.handleResponse()}
        </div>
      </div>
    );
  }
}

export default SignUp;
