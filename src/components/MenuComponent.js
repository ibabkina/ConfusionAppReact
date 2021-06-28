import React, { Component } from 'react';
// import { Media } from 'reactstrap'; // helps construct menu
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'; // helps construct menu
// import logo from './logo.svg';
// import { Navbar, NavbarBrand } from 'reactstrap';
// import './App.css';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }
    
    onDishSelect(dish) {
        this.setState({ selectedDish: dish});
    }

    renderDish(dish) {
        if(dish != null) {
            return(
                <Card>
                   <CardImg width="100%" object src={ dish.image } alt={ dish.name }/>
                   <CardBody>
                     <CardTitle>{ dish.name }</CardTitle>
                     <CardText>{ dish.description}</CardText>
                    </CardBody> 
                </Card>
            );
        }
        else {
            return(
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish)=> {
            return ( 
            //for every dish I'm going to return a layout 
            //construct the view for each of items in dishes
            //mt-5=give a top margin of 5 units
            //whenever you construct a list of items in React, every item requires a key 
            //property to uniquely identifyeach item that has been rendered in here.
            //Using Media class. Read Reactstrap documentation on how to use Media class
                <div key={ dish.id } className="col-12 col-md-5 m-1"> 
                    <Card onClick={() => this.onDishSelect(dish)}>
                        <CardImg width="100%" object src={ dish.image } alt={ dish.name }/>
                        <CardImgOverlay>
                            <CardTitle>{ dish.name }</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
     }
}

export default Menu;
