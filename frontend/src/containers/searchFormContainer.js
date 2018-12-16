import React, { Component } from 'react';

// Import Components
import { CheckBox } from '../components/check_box/checkBox';
import { DropDown } from '../components/drop_down/dropDown';

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        species: '',
        gender: [],

      },

    genderOptions: ['Male', 'Female'],
    speciesOptions: ['Dog', 'Cat', 'Horse'],
    activityLevel: ['Active', 'Not Active']
  }


  this.handleGenderCheckBox = this.handleGenderCheckBox.bind(this);
  this.handleInput = this.handleInput.bind(this);
  this.handleFormSubmit = this.handleFormSubmit.bind(this);

}
handleGenderCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.gender.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.gender.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.gender, newSelection];
    }

      this.setState( prevState => ({ newUser:
        {...prevState.newUser, gender: newSelectionArray }
      })
      )
}

handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
  }
  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;

    fetch('http://example.com',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   

  render() {
    return (
      <form className='searchWants' onSubmit={this.handleFormSubmit}>
        <h2> Search Preferances </h2>
        <CheckBox title={'Gender'}
                  name={'gender'}
                  options={this.state.genderOptions}
                  selectedOptions={this.state.newUser.gender}
                  value={this.state.value}
                  handleChange={this.handleGenderCheckBox}
                  />

       <DropDown title={'Species'}
               name={'species'}
               options = {this.state.speciesOptions} 
               value = {this.state.newUser.species}
               placeholder = {'Select Species'}
               handleChange = {this.handleInput}
               />
      </form>
    );
  }
}

export default SearchFormContainer;
