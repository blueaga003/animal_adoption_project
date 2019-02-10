import React, { Component } from "react";
import "./greeting.css";

class Greeting extends Component {
  render() {
    return (
      <div className = "greeting">
        <h3> Welcome to HoundDog </h3>
        We are your one stop shop for finding shelter pets!<br/>
        Simply create an account and let the searching begin!
        <br/>
      </div> 
    );
  }
}

export default Greeting;
