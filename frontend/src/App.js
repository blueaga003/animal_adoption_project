import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from './components/nav_bar/navBar';
//import HomePage from './containers/homepageContainer';
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

this.checkIfLoggedIn = this.checkIfLoggedIn.bind(this)
this.renderFunction = this.renderFunction.bind(this)
}

// Pass to Sign Up Container
checkIfLoggedIn = (props) => {
  let accessToken = localStorage.getItem('Token')
  console.log("AccessToken") 
  this.setState(props)
  console.log(accessToken)
  if (accessToken !== null && this.state.loggedIn === false) {
    this.setState({loggedIn: true})
  }
}

 renderFunction(props) {
  return <SignUpContainer checkIfLoggedIn={this.checkIfLoggedIn} /> 
}
componentDidMount(){this.checkIfLoggedIn()}
  render() {
    return (
      <Router>
        <div className='App'>
          <header className='App-header'>
            <NavBar loggedIn={this.state.loggedIn}/>
          </header>
       <Route exact={true} path='/' component = { SignUpContainer } />
       <Route path='/petSearch' component = { DisplayResults } />
       <Route path='/register' component = {SignUpContainer} />
       <Route path='/login' component = { LogInContainer } />
       </div>
     </Router>
    );
  }
}

export default App;


       //<Route path='/register' component = {this.renderFunction} />
