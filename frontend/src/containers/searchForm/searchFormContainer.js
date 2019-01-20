import React, { Component } from 'react';
import { CheckBox } from '../../components/check_box/checkBox';
import { DropDown } from '../../components/drop_down/dropDown';
import { Button } from "react-bootstrap";

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        species: '',
        animalActivityLevels: [],
        gender: [],
        userResponse: 0,
        defaultSpecies: '',
        defaultSpeciesOptions: ['dog', 'cat', 'horse'],
        defaultActivityLevels: ['not active', 'slightly active', 'moderately active', 'highly active'],
        defaultGender: ['male', 'female'],
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

      this.props.handleDataBind({gender: newSelectionArray});
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
      this.props.handleDataBind({animalActivityLevels: newSelectionArray});
}

handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
   this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value
        }
      }), () => console.log(this.state.newUser))
}
handleFormSubmit(event) {
  let accessToken = localStorage.getItem('Token');
  let backendInfo = {}
  if ((this.state.newUser.gender.length === 0) && (this.state.newUser.species.length === 0) && (this.state.newUser.animalActivityLevels.length === 0)) {
    backendInfo.gender = this.state.newUser.defaultGender
    backendInfo.species = this.state.newUser.defaultSpecies
    backendInfo.activityLevels = this.state.newUser.defaultActivityLevels
  } else {
    backendInfo.gender = this.state.newUser.gender
    backendInfo.species = this.state.newUser.species
    backendInfo.activityLevels = this.state.newUser.animalActivityLevels
  }
  // set default in state
  event.preventDefault();
  fetch('http://localhost:5000/petSearch', {
    credentials:'include',
    method:'POST',
    body:JSON.stringify(backendInfo),
    headers: {
      'Accept':'application/json',
      'Content-Type':'application/json',
      'Authorization':'Bearer ' + accessToken
    }
  }).then(response => response.json())
    .then(responseAnswer => {
       this.setState({userResponse: responseAnswer});
       console.log('userResponse: ' + this.state.userResponse);
    })
};

// set userResponse -> handleDataBind to pass it to the "homepage" component
  render() {

    return (
      <form className='animalSearchWants' onSubmit={this.handleFormSubmit}>
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
        <Button
          block
          bsSize="large"
          type="submit"
        >
          Search
        </Button>
      </form>
    );
  }
}

export default SearchFormContainer;
