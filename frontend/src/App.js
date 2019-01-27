import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/nav_bar/navBar';
import HomePage from './containers/homepageContainer';
import LogInContainer from './containers/login/logInContainer';
import SignUpContainer from './containers/signup/signUpContainer';
import DisplayResults from './containers/resultsContainer';
// import other components we want to render here such as a NAVBAR for example

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
  }

checkIfLoggedIn = event => {
  let accessToken = localStorage.getItem('Token')
  console.log("AccessToken")
  console.log(accessToken)
  if (accessToken !== null && this.state.loggedIn === false) {
    this.setState({loggedIn: true})
  }
}
  render() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            {this.checkIfLoggedIn()}
            <NavBar loggedIn={this.state.loggedIn}/>
          </header>
       <Route exact={true} path='/' component = { HomePage } />
       <Route path='/petSearch' component = { DisplayResults } />
       <Route path='/login' component = { LogInContainer } />
       <Route path='/register' component = { SignUpContainer } />
       </div>
     </Router>
    );
  }
}

export default App;
