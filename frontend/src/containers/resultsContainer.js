import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Greeting from '../components/greeting/greeting'
//import Map from '../components/map/map';
import SearchFormContainer from './searchForm/searchFormContainer';
import PetDisplayContainer from './petDisplayContainer'

class DisplayResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userResponse: 0
    };

  this.handleDataBind = this.handleDataBind.bind(this)
  this.handleResponse = this.handleResponse.bind(this)

//  this.handleResponse = this.handleResonse.bind(this)
}

handleDataBind = (dataFromStates) => {
  this.setState(dataFromStates)
  console.log("Does something")
  console.log("FORREAL!")
}

//handleFormSubmit(event)//{
// let accessToken = localStorage.getItem('Token');
// event.preventDefault();
// fetch('http://localhost:5000/petSearch', {
//   credentials:'include',
//   method:'POST',
//   body:JSON.stringify(this.state),
//   headers: {
//     'Accept':'application/json',
//     'Content-Type':'application/json',
//     'Authorization':'Bearer ' + accessToken
//   }
// }).then(response => response.json())
//   .then(responseAnswer => {
//      this.setState({userResponse: responseAnswer});
//      console.log('userResponse: ' + this.state.userResponse);
//      console.log('accessToken: ' + accessToken);
//   })
//}

handleResponse = event => {
  console.log("Response being handled")
  if (this.state.userResponse === 0) {
    return " Make a search!"
  }

}

  render() {
    if (this.state.userResponse['pets'] !== undefined){
    console.log('pets:' + this.state.userResponse['pets'])
}
    console.log(this.state.userResponse)
    return (
        <div style={{height: '1200px', width: '1200px'}}>
          <Greeting/>
          <Container>
            <Row>
              <Col md="3">
                <SearchFormContainer
                  handleDataBind={this.handleDataBind}
                />
              </Col>
              <Col md="9">
                <PetDisplayContainer
                  userResponse={this.state.userResponse}
                />
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}
export default DisplayResults;
