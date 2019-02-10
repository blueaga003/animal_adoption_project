import React, { Component } from "react";
import { DisplayPet } from "../components/petDisplay"
import { Row } from "reactstrap"
import "./petDisplayContainer.css"
class PetDisplayContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
  }
  this.renderList=this.renderList.bind(this);
}

renderList(event) {

  let dataList = []
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
            url={object.url}
          />)
  }
     return dataList
}


  render() {
  return (
    <div className="petDisplayResponse">
      <h3> Results </h3>
      <Row className="petRow"> {this.renderList()}</Row>
      {this.state.data}
    </div>
  );
  }
}

export default PetDisplayContainer;
