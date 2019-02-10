import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./components/nav_bar/navBar";
import LogInContainer from "./containers/login/logInContainer";
import SignUpContainer from "./containers/signup/signUpContainer";
import DisplayResults from "./containers/resultsContainer";
import HomePageContainer from "./containers/homepageContainer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false
    }
}

checkIfLoggedIn = (props) => {
  this.setState({loggedIn:true})
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <NavBar loggedIn={this.state.loggedIn}/>
          </header>
       <Route exact={true} path="/" component = { HomePageContainer } />
       <Route path="/petSearch" component = { DisplayResults } />
       <Route
         path="/register"
         render = {(props) => (
           <SignUpContainer
             {...props}
             checkIfLoggedIn={this.checkIfLoggedIn}
           />
         )}
      />
       <Route
         path="/login"
         render = {(props) => (
           <LogInContainer
             {...props}
             checkIfLoggedIn={this.checkIfLoggedIn}
           />
         )}
      />
       </div>
     </Router>
    );
  }
}

export default App;
