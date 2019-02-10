import React, { Component } from "react";
import AnimalPreferences from "./animalPreferences";

class AnimalPreferencesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        species: "",
        animalActivityLevels: [],
        gender: []

      },
      
     genderOptions: ["male", "female"],
     speciesOptions: ["dog", "cat", "horse", "bird", "guinea pig", "snake", "turtle", "gerbil", "snake", "rabbit", "fish", "ferret", "lizard", "hampster", "gekko", "pig", "chinchilla", "duck", "sheep", "rat"],
     activityLevels: ["not active", "slightly active", "moderately active", "highly active"]
  }


  this.handleGenderCheckBox = this.handleGenderCheckBox.bind(this);
  this.handleActivityLevelsCheckBox = this.handleActivityLevelsCheckBox.bind(this);
  this.handleInput = this.handleInput.bind(this);

}
handleGenderCheckBox(e) {
    const newSelection = e.target.value;
    let newSelectionArray;

    if(this.state.newUser.gender.indexOf(newSelection) > -1) {
      newSelectionArray = this.state.newUser.gender.filter(s => s !== newSelection);
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
      newSelectionArray = this.state.newUser.animalActivityLevels.filter(s => s !== newSelection);
    } else {
      newSelectionArray = [...this.state.newUser.animalActivityLevels, newSelection];
    }

      this.setState( prevState => ({ newUser:
        {...prevState.newUser, animalActivityLevels: newSelectionArray }
      })
      )
      this.props.handleDataBind({animalActivityLevels: newSelectionArray});
}

handleInput(e) {
       let value = e.target.value;
       let name = e.target.name;
       this.setState( prevState => ({ newUser : 
        {...prevState.newUser, [name]: value}
      }));
      this.props.handleDataBind({species: value});
  }

render() {
    return (
      <div className="animalPreferences">
        <AnimalPreferences
          newUser={this.state.newUser}
          species={this.state.species}
          animalActivityLevels={this.state.animalActivityLevels}
          gender={this.state.gender}

          genderOptions={this.state.genderOptions}
          speciesOptions={this.state.speciesOptions}
          activityLevels={this.state.activityLevels}

          handleGenderCheckBox={this.handleGenderCheckBox}
          handleActivityLevelsCheckBox={this.handleActivityLevelsCheckBox}
          handleInput={this.handleInput}
        />
      </div>
    );
  }
}

export default AnimalPreferencesContainer;


          //handleInput={this.handleInput}
