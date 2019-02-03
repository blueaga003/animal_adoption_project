import React, { Component } from 'react';
import { Form, Button, FormGroup, FormControl} from 'react-bootstrap';
import AnimalPreferencesContainer from '../animalPreferences/animalPreferencesContainer';
import './signUp.css'

class SignUp extends Component {

  render() { 
    return (
      <div className='SignUp'>
        <form onSubmit={this.props.handleSubmit}>
          <FormGroup controlId="email" bsSize="large" className="UserEntry">
            <Form.Label>Email</Form.Label>
            <FormControl
              autoFocus
              type="email"
              value={this.props.email}
              onChange={this.props.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large" className="UserEntry">
            <Form.Label>Password</Form.Label>
            <FormControl
              value={this.props.password}
              onChange={this.props.handleChange}
              type="password"
            />
          </FormGroup>
          <FormGroup controlId="firstName" bsSize="large" className='UserEntry'>
            <Form.Label>First Name</Form.Label>
            <FormControl
              value={this.props.firstName}
              onChange={this.props.handleChange}
              type="firstName"
            />
          </FormGroup>
          <FormGroup controlId="lastName" bsSize="large" className='UserEntry'>
            <Form.Label>Last Name</Form.Label>
            <FormControl
              value={this.props.lastName}
              onChange={this.props.handleChange}
              type="lastName"
            />
          </FormGroup>
          <AnimalPreferencesContainer
             handleDataBind={this.props.handleDataBind}
          />
          <Button
            className="Button"
            onClick={this.props.handleSubmit}
            block
            bsSize="large"
            disabled={!this.props.validateForm()}
            type="submit"
          >
            Register
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
