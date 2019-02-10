import React, { Component } from "react";
import { CheckBox } from "../../components/check_box/checkBox";
import { DropDown } from "../../components/drop_down/dropDown";
import { Button } from "react-bootstrap";
import "./searchForm.css";

class SearchFormContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        species: "",
        animalActivityLevels: [],
        gender: [],
        age: [],
        userResponse: 0,
        defaultSpecies: "",
        defaultSpeciesOptions: ["dog", "cat", "horse", "bird", "guinea pig", "snake", "turtle", "gerbil", "rabbit", "fish", "ferret", "lizard", "hampster", "gekko", "pig", "chinchilla", "duck", "sheep", "rat", "unknown"],
        defaultActivityLevels: ["not active", "slightly active", "moderately active", "highly active", "unknown"],
        defaultGender: ["male", "female", "unknown"],
        defaultAge: ["baby", "young", "adult", "senior", "unknown"]
      },

     genderOptions: ["male", "female"],
     speciesOptions: ["dog", "cat", "horse", "bird", "guinea pig", "snake", "turtle", "gerbil", "rabbit", "fish", "ferret", "lizard", "hampster", "gekko", "pig", "chinchilla", "duck", "sheep", "rat"],
     activityLevels: ["not active", "slightly active", "moderately active", "highly active"],
     ageOptions: ["baby", "young", "adult", "senior"]
  }

  this.handleGenderCheckBox = this.handleGenderCheckBox.bind(this);
  this.handleAgeCheckBox = this.handleAgeCheckBox.bind(this);
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

handleAgeCheckBox(e) {

    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.age.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.age.filter(s => s !== newSelection)
    } else {
      newSelectionArray = [...this.state.newUser.age, newSelection];
    }

      this.setState( prevState => ({ newUser:
        {...prevState.newUser, age: newSelectionArray }
      })
      )

      this.props.handleDataBind({age: newSelectionArray});
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
  let accessToken = localStorage.getItem("Token");
  let backendInfo = {};
  if ((this.state.newUser.gender.length === 0) && (this.state.newUser.species.length === 0) && (this.state.newUser.animalActivityLevels.length === 0) && (this.state.newUser.gender.length === 0)) {
    backendInfo.gender = this.state.newUser.defaultGender;
    backendInfo.species = this.state.newUser.defaultSpecies;
    backendInfo.activityLevels = this.state.newUser.defaultActivityLevels;
    backendInfo.age = this.state.age.defaultAge;
  } else {
    backendInfo.gender = this.state.newUser.gender;
    backendInfo.species = this.state.newUser.species;
    backendInfo.activityLevels = this.state.newUser.animalActivityLevels;
    backendInfo.age = this.state.newUser.age;
  }
  event.preventDefault();
  fetch("http://localhost:5000/petSearch", {
    credentials:"include",
    method:"POST",
    body:JSON.stringify(backendInfo),
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json",
      "Authorization":"Bearer " + accessToken
    }
  }).then(response => response.json())
    .then(responseAnswer => {
       this.setState({userResponse: responseAnswer});
       this.props.handleDataBind({userResponse: responseAnswer});
    })
};

  render() {
    return (
      <form className="animalSearchWants" onSubmit={this.handleFormSubmit}>
        <h2 className="searchTitle"> Search Preferences </h2>
        <CheckBox title={"GENDER"}
                  name={"gender"}
                  options={this.state.genderOptions}
                  selectedOptions={this.state.newUser.gender}
                  value={this.state.value}
                  handleChange={this.handleGenderCheckBox}
                  />
        <CheckBox title={"AGE"}
                  name={"age"}
                  options={this.state.ageOptions}
                  selectedOptions={this.state.newUser.age}
                  value={this.state.value}
                  handleChange={this.handleAgeCheckBox}
                  />
        <CheckBox title={"ACTIVITY LEVEL"}
                  name={"animalActivityLevels"}
                  options={this.state.activityLevels}
                  selectedOptions={this.state.newUser.animalActivityLevels}
                  value={this.state.value}
                  handleChange={this.handleActivityLevelsCheckBox}
                  />
        <DropDown title={"SPECIES"}
               name={"species"}
               options = {this.state.speciesOptions} 
               value = {this.state.newUser.species}
               placeholder = {"Select Species"}
               handleChange = {this.handleInput}
               />
        <Button
          className="button"
          block
          type="submit"
        >
          Search
        </Button>
      </form>
    );
  }
}

export default SearchFormContainer;
