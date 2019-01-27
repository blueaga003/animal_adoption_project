import React, { Component } from 'react';
import { DisplayPet } from '../components/petDisplay'

class PetDisplayContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
  }
  this.renderList=this.renderList.bind(this)
}

renderList = event => {

  console.log("Response being handled")
  let dataList = []
  console.log("PETS")
  console.log(this.props.userResponse.pets)
  for (let object of this.props.userResponse.pets) {
       object = JSON.parse(object)
       dataList.push(
          <DisplayPet
            key={object.animal_id}
            name={object.name}
            species={object.species}
            breed={object.breed}
            gender={object.gender}
            age={object.age}
          />)
  }
     console.log("DATALIST")
     console.log(dataList)
     return dataList
}


  render() {
  return (
    <div className="petDisplayResponse">
      {this.renderList()}
      {this.state.data}
    </div>
  );
  }
}

export default PetDisplayContainer;
