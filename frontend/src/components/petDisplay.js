import React, {Component} from 'react';

const DisplayPet = (props) => {
  return (
    <div className="display-pet">
       <div>
         name={props.name}
         image={props.image}
         species={props.species}
         activeLevels={props.activeLevels}
         breed={props.breed}
       </div>
    </div>
)}

export { DisplayPet };
