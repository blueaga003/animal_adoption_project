import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Greeting from '../components/greeting/greeting'
import Map from '../components/map/map';
import FormContainer from './searchForm/searchFormContainer'

class HomePage extends Component {
  render() {
    return (
        <div style={{height: '1200px', width: '1200px'}}>
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
    );
  }
}
export default HomePage;
