import React, { Component } from 'react';
import SearchFormContainer from './searchFormContainer';
// Import Components

class SignUpContainer extends Component {

  render() {
    return (
      <div className='SignUpPage'>
        <SearchFormContainer/>
      </div>
    );
  }
}

export default SignUpContainer;
