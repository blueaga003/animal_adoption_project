/* checkBox.jsx */
import React from 'react'
import './checkBox.css'

const CheckBox = (props) => {

    return( <div>
    <label form={props.name} className="form-label">{props.title}</label>
    <div className="checkbox-group">
      {props.options.map(option => {
        return (
          <label key={option}>
            <input
              className="form-checkbox"
              id={option}
              name={props.name}
              onChange={props.handleChange}
              value={option}
              checked={props.selectedOptions.indexOf(option) > -1}
              type="checkbox" /> {option}
          </label>
        );
      })}
    </div>
  </div>
);

}

export { CheckBox };
