import React, { Component } from 'react';

// Import Components
import { CheckBox } from '../components/check_box/checkBox';


class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        gender: [],

      },

    genderOptions: ['Male', 'Female'],
    activityLevel: ['Active', 'Not Active']
  }

  this.handleFormSubmit = this.handleFormSubmit.bind(this);
  this.handleCheckBox = this.handleCheckBox.bind(this);
}
  handleCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    newSelectionArray = [...this.state.newUser.gender, newSelection];

  }
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
  }


  render() {
    return (
      <form className='searchWants' onSubmit={this.handleFormSubmit}>
    e.preventDefault();
    let userData = this.state.newUser;
        <h2> Search Preferances </h2>
        <CheckBox title={'Gender'}
                  name={'gender'}
                   options={this.state.genderOptions}
                   selectedOptions = { this.state.newUser.gender }
                   />
      </form>
    );
  }
}

export default SearchFormContainer;
