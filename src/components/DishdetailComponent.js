import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'; // helps construct menu   

class DishdetailComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish});
    // }

    // renderDish(dish) {
    //     if (dish != null)
    //         return(
    //             <Card>
    //                 <CardImg top src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                   <CardTitle>{dish.name}</CardTitle>
    //                   <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         );
    //     else
    //         return(
    //             <div></div>
    //         );
    // }

    render() {

        const dishDetail = this.props.selectedDish.map((dish) => {
            return (
              <div  className="col-12 col-md-5 m-1">
                <Card key={dish.id}
                  onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });


        // const menu = this.props.dishes.map((dish) => {
            // return (
            //   <div  className="col-12 col-md-5 m-1">
            //     <Card key={dish.id}
            //       onClick={() => this.onDishSelect(dish)}>
            //       <CardImg width="100%" src={dish.image} alt={dish.name} />
            //       <CardImgOverlay>
            //           <CardTitle>{dish.name}</CardTitle>
            //       </CardImgOverlay>
            //     </Card>
            //   </div>
            // );
        // });

        return (
            
            <div className="container">
                <div className="row">
                    {/* {menu}
                </div> */}
                {/* <div className="row"> */}
                  <div  className="col-12 col-md-5 m-1">
                    {/* {this.renderDish(this.state.selectedDish)} */}
                    { dishDetail }
                  </div>
                </div>
            </div>
        );
    }
}

export default DishdetailComponent;
