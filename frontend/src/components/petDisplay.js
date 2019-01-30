import React  from 'react';

const DisplayPet = (props) => {
  return (
    <div className="display-pet">
            <div>
                <img src="https://s3.amazonaws.com/filestore.rescuegroups.org/30/pictures/animals/13961/13961291/63899852_3216x2136.jpg" alt="meep" height="100px" width="150px"/> 
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
