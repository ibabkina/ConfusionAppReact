import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'; // removed ./components cause already in component folder
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'; //go one level up to src first ..
import { Switch, Route, Redirect } from 'react-router-dom';

// Making MainComponent to be a container component
class Main extends Component {
  //We need to lift up the state info in here.
  //In order to store a state, we need to define 
  //the state in the constructor of the class component

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }



  render() {

    const HomePage = () => {
        return(
            <Home />
        );
    }
      return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
