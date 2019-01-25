import React, { Component } from 'react';
import { DisplayPet } from '../components/petDisplay'

class PetDisplayContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userResponse: 0,
  }

}

handleResponse = event => {
  console.log("Response being handled")
  if (this.state.userResponse === 0) {
    return " Make a search!"
  }
}
// set userResponse -> handleDataBind to pass it to the "homepage" component
  render() {

    return (
      <div className='petDisplay' >
        <DisplayPet/>
      </div>
    );
  }
}

export default PetDisplayContainer;
