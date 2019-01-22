import React, { Component } from 'react';
import { CheckBox } from '../../components/check_box/checkBox';
import { DropDown } from '../../components/drop_down/dropDown';

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        species: '',
        animalActivityLevels: [],
        gender: [],

      },

     genderOptions: ['male', 'female'],
     speciesOptions: ['dog', 'cat', 'horse'],
     activityLevels: ['not active', 'slightly active', 'moderately active', 'highly active'],
    //dogBreedOptions: []
  }

  this.handleGenderCheckBox = this.handleGenderCheckBox.bind(this);
  this.handleActivityLevelsCheckBox = this.handleActivityLevelsCheckBox.bind(this);
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

handleActivityLevelsCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.animalActivityLevels.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.animalActivityLevels.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.animalActivityLevels, newSelection];
    }

      this.setState( prevState => ({ newUser:
        {...prevState.newUser, animalActivityLevels: newSelectionArray }
      }), () => console.log(this.state.newUser))
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
      <form className='aniamlSearchWants' onSubmit={this.handleFormSubmit}>
        <h2> Search Preferances </h2>
        <CheckBox title={'GENDER'}
                  name={'gender'}
                  options={this.state.genderOptions}
                  selectedOptions={this.state.newUser.gender}
                  value={this.state.value}
                  handleChange={this.handleGenderCheckBox}
                  />
        <CheckBox title={'ACTIVITY LEVEL'}
                  name={'animalActivityLevels'}
                  options={this.state.activityLevels}
                  selectedOptions={this.state.newUser.animalActivityLevels}
                  value={this.state.value}
                  handleChange={this.handleActivityLevelsCheckBox}
                  />

       <DropDown title={'SPECIES'}
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