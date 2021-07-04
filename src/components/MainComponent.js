import React, { Component } from 'react';
import Menu from './MenuComponent'; // removed ./components cause already in component folder
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes'; //go one level up to src first ..

// Making MainComponent to be a container component
class Main extends Component {
  //We need to lift up the state info in here.
  //In order to store a state, we need to define 
  //the state in the constructor of the class component

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
}

  render() {
      return (
      <div>
        <Header />
        <Menu dishes={ this.state.dishes }
                onClick={(dishId) => this.onDishSelect(dishId)} />  
                {/* in onClick() I only pass dishId cause I have DISHES here and can grab info and change parameter 
                dish to dishId as well */}
                {/* We passed onClick as a property in MenuComponent */}
        <Dishdetail dishSelected={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish )[0]}/>
        {/* This arrow functions what it does is it helps to select out all those dishes for which 
        the dishId matches the selectedDish. it returns an array. We have to select the first item in the array [0]*/}
      <Footer />
      </div>
    );
  }
}

export default Main;
