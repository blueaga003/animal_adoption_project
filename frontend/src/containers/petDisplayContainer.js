import React, { Component } from 'react';
import { DisplayPet } from '../components/petDisplay'

class PetDisplayContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userResponse: 0,
  }
  this.handleResonse=this.handleResponse.bind(this)
}

handleResponse = event => {
  console.log("Response being handled")
  console.log("userResponse_pets: " + this.props.userResponse['pets'])
  console.log("userResponse_0: " + this.props.userResponse)
  if (this.props.userResponse === 0) {
    return " Make a search!"
  } 
  else if (this.props.userResponse['error'] !== undefined) {
      return "Sorry! No results matched that criteria!Try a different search!"
  }
    else {
    return (
      <div className='petDisplay' >
        <DisplayPet
          name={this.props.userResponse['pets']}
          species={"props.species"}
          
          
        />
      </div>
    );
  }
}
// set userResponse -> handleDataBind to pass it to the "homepage" component
  render() {
  
  return (
    <div className="petDisplayResponse">
      {this.handleResponse()}
    </div>
  );
  }
}

export default PetDisplayContainer;
