import React, { Component } from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent'; // removed ./components cause already in component folder
import Contact from './ContactComponent';
import About from './AboutComponent';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// Cut out from here and move to reducer for Redux. The main component will nopw obtain the state from the Redux store.
// import { DISHES } from '../shared/dishes'; //go one level up to src first ..
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';


// This will map the Redux Store's state into props that will become available
// to main component.
// Obtains state as a parameter here from my Redux Store. I am going to map all the state.
// In main component when we defined state, we have 4 properties within the state:
// dishes (these dishes will become available from my Redux Store' state).
// We need access to the state defined in Reducer here within MainComponent so we are mapping 
// each one of them into properties that become now available to my main compenent.
const mapStateToProps = state => {
    return {
      // How did they become available as props to my main component? They are derived
      // from the Redux's Store by connecting this component to the Redux Store
      // (see the last line of code in this file).
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
      // Now inside this main component, all the Redux state becomes available as props
    }
}

const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, author, comment) => dispatch(addComment (dishId, rating, author, comment))
}); //this can be used within our Main component

// Making MainComponent to be a container component
class Main extends Component {
  //We need to lift up the state info in here.
  //In order to store a state, we need to define 
  //the state in the constructor of the class component

  constructor(props) {
    super(props);

    // this.state = {
    //   dishes: DISHES,
    //   comments: COMMENTS,
    //   promotions: PROMOTIONS,
    //   leaders: LEADERS
    // };
  }

  render() {

    const HomePage = () => {
        return(
          // Whatever we were using as this state here will have to be changed to these props
          // Everywhere you see this.state, you change it to this.props
            <Home 
                dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />
        );
      }

      //Function component
      //accComment passed in Dishdetail component => we can make use of this function to dispatch the action to the Store.
      const DishWithId = ({match}) => {
          return(
            <Dishdetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} //will convert in base 10 int here
            comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
            addComment={this.props.addComment}
            />
            );
      }

      return (
      <div>
        <Header />
        <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

//Supplying as parameters to connect(). When we connect them, mapStateToProps, mapDispatchToProps
//become available within Main Component.
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

