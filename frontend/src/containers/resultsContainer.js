import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Greeting from '../components/greeting/greeting'
import '../components/petDisplay.css'
import SearchFormContainer from './searchForm/searchFormContainer';
import PetDisplayContainer from './petDisplayContainer'

class DisplayResults extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userResponse: 0,
      loggedIn: true,
    };

  this.handleDataBind = this.handleDataBind.bind(this)

//  this.handleResponse = this.handleResonse.bind(this)
}

handleDataBind = (dataFromStates) => {
  this.setState(dataFromStates)
}

renderPetDisplayContainer() {
  //this.props.handleLoginState({loggedIn: true});
  if (this.state.userResponse === 0) {
    return (
      <div className='searchPrompt'>
        Make a search!
      </div>
     );
  }
  else if (this.state.userResponse['error'] !== undefined) {
    return (
      <div className='searchTryAgain'>
        Sorry, no search results matched that criteria! Please try another search!
      </div>
    );
  }
  else if (this.state.userResponse['msg'] !== undefined) {
    this.props.history.push('/login')
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
        <div className='petSearchPage'>
          <Greeting/>
          <Container style={{maxWidth:'90%'}}>
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
