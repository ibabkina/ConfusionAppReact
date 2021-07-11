import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'; // allows configure React app so that Redux store becomes available to all components in app.
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore(); // now Store becomes available to me

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
      <Provider store={store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
