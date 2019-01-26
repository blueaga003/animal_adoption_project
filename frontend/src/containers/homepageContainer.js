import React, { Component } from 'react';
//import { Container, Row, Col } from 'reactstrap';
import Greeting from '../components/greeting/greeting'
//import Map from '../components/map/map';

class HomePage extends Component {

  render() {
    return (
        <div style={{height: '1200px', width: '1200px'}}>
          <Greeting/>
        </div>
    );
  }
}
export default HomePage;
