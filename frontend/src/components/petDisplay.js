import React, {Component} from 'react';

const DisplayPet = (props) => {
  return (
    <div className="display-pet">
      {props.options.map(option => {
        return (
          <label key={option}>
            <div>
              className="pet"
              name={option}
              image={option}
              species={option}
              activeLevels={option}
              breed={option}
            </div>
          </label>
        );
      })}
    </div>
)}

export { DisplayPet };
