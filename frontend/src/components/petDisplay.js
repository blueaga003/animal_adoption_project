import React  from 'react';

const DisplayPet = (props) => {
  return (
    <div className="display-pet">
            <div>
             <p> {props.name} </p>
              {props.species}
              {props.breed}
              {props.gender}
              {props.age}
            </div>
    </div>
  );
}

export { DisplayPet };
