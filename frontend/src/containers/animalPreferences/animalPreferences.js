import React, { Component } from 'react';
import { CheckBox } from '../../components/check_box/checkBox';
import { DropDown } from '../../components/drop_down/dropDown';

class AnimalPreferences extends Component {
 constructor(props) {
   super(props)
}
  render() {
    return (
      <div className='animalPreferences'>
        <h2> Animal Preferences </h2>
        <h6> Optionally enter search preferences </h6>
        <CheckBox title={'GENDER'}
                  name={'gender'}
                  options={this.props.genderOptions}
                  selectedOptions={this.props.newUser.gender}
                  value={this.props.value}
                  handleChange={this.props.handleGenderCheckBox}
                  />
        <CheckBox title={'ACTIVITY LEVEL'}
                  name={'animalActivityLevels'}
                  options={this.props.activityLevels}
                  selectedOptions={this.props.newUser.animalActivityLevels}
                  value={this.props.value}
                  handleChange={this.props.handleActivityLevelsCheckBox}
                  />

       <DropDown title={'SPECIES'}
               name={'species'}
               options = {this.props.speciesOptions} 
               value={this.props.newUser.species}
               placeholder={'Select Species'}
               handleChange={this.props.handleInput}
               />
      </div>
    );
  }
}

export default AnimalPreferences;

               //handleChange={this.handleInput}
