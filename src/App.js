import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';

// function App() {
class App extends Component {
  //We need to lift up the state info in here.
  //In order to store a state, we need to define 
  //the state in the constructor of the class component

  // When we've moved the state to the Main component, and we're no longer storing 
  // any state in the App Component and can remove constructor completely. And App Component
  // itself receives no props.

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     dishes: DISHES
  //   };
  // }

  render() {
    return (
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
