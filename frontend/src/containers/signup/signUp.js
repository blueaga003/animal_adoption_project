import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import SearchFormContainer from '../searchForm/searchFormContainer';
import './signUp.css'

class SignUp extends Component {

  constructor(props) {
    super(props)
  };

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
          <SearchFormContainer/>
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
      </div>
    );
  }
}

export default SignUp;
