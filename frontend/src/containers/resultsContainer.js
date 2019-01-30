import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Greeting from '../components/greeting/greeting'
import '../components/petDisplay.css'
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

//  this.handleResponse = this.handleResonse.bind(this)
}

handleDataBind = (dataFromStates) => {
  this.setState(dataFromStates)
}

renderPetDisplayContainer() {
  if (this.state.userResponse === 0) {
    return (
      <div>
        Make a search!
      </div>
     );
  }
  else if (this.state.userResponse['error'] !== undefined) {
    return (
      <div>
        Sorry no search results matched that criteria! Please try another search!
      </div>
    );
  }
  else {
     return (
                <PetDisplayContainer
                  userResponse={this.state.userResponse}
                />
  )
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
                {this.renderPetDisplayContainer()}
              </Col>
            </Row>
          </Container>
        </div>
    );
  }
}
export default DisplayResults;
