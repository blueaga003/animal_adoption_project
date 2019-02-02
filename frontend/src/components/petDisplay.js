import React  from 'react';

const DisplayPet = (props) => {
  return (
    <div className="display-pet">
            <div className="petTable">
                <div className='petImage' height="300px" width="300px">
                <img src={props.url} alt="meep"/> 
                </div>
            <table>
              <tbody>
              <tr>
                <th>
                <h4>{props.name}</h4>
                </th>
              </tr>
              <tr>
                <td>
                  {props.species}
                </td>
              </tr>
              <tr>
                <td>
                  {props.breed}
                </td>
              </tr>
              <tr>
                <td>
                  {props.gender}
                </td>
              </tr>
              <tr>
                <td>
                  {props.age}
                </td>
              </tr>
            </tbody>
            </table>
            </div>
    </div>
  );
}

export { DisplayPet };
