import React  from "react";

const DisplayPet = (props) => {
  return (
    <div className="display-pet">
            <div className="petTable">
                <div className="petImage" height="300px" width="300px">
                <img src={props.url} alt="meep"/> 
                </div>
                <h4 className="animalName">{props.name}</h4>
                </div>
                <div>
                  {props.species}
                </div>
                <div>
                  {props.breed}
                </div>
                <div>
                  {props.gender}
                </div>
                <div>
                  {props.age}
                </div>
                <div>
            </div>
    </div>
  );
}

export { DisplayPet };
