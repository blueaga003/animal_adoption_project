/* dropDown.js */

import React from 'react';

const DropDown = (props) => {
    return(<div className="form-group">
            <label htmlFor={props.name}> {props.title} </label>
            <select
              id = {props.name}
              name={props.name}
              defaultValue={props.value}
              onChange={props.handleChange}
              className="form-control">
              <option value="" disabled>{props.placeholder}</option>
              {props.options.map(option => {
                return (
                  <option
                    key={option}
                    value={option}
                    label={option}>{option}</option>
                );
              })}
            </select>
  </div>)
}

export { DropDown };
