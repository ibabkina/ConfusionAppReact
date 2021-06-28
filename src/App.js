import React, { Component } from 'react';
// import logo from './logo.svg';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';

// function App() {
class App extends Component {
  //We need to lift up the state info in here.
  //In order to store a state, we need to define 
  //the state in the constructor of the class component

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }
  //Now we can make this state information available to the Menu component 
  //through props from the App.js file

  render() {
      return (
      <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={ this.state.dishes }/>
      </div>
    );
  }
}

export default App;
