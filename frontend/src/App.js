import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Greeting from './components/greeting/greeting';
import Map from './components/map/map';
import FormContainer from './containers/searchFormContainer';
// import other components we want to render here such as a NAVBAR for example

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
              <div style={{height: '1500px', width: '1500px'}}>
                <Greeting/>
                <Container>
                  <Row>
                    <Col md="3">
                      <FormContainer/>
                    </Col>
                    <Col md="9">
                      <Map/>
                    </Col>
                  </Row>
                </Container>
             </div>
     </div>
    );
  }
}

export default App;
