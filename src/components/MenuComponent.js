import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'; // helps construct menu

    //  function RenderMenuItem(props)  
     function RenderMenuItem({ dish, onClick })  {
        return(
          // <Card onClick={() => this.props.onClick(dish.id)}> We remove this.props
          // before .onClick because this onClick is coming in as a parameter here
            <Card onClick={() => onClick(dish.id)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Card>
        );
     }
     const Menu = (props) => {
      // const menu = this.props.dishes.map((dish) => { Have to change 
      // this.props.dishes.map((dish) to props.dishes.map((dish) because
      // it's not this.props, props is coming in as the parameter for this 
      // function
      const menu = props.dishes.map((dish) => {
        return (
          // <div  className="col-12 col-md-5 m-1">
          //   <Card key={dish.id}
          // {/* onClick={() => this.props.onClick(dish.id)}> */}
          <div key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenuItem dish={dish} onClick={props.onClick} />
          </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {menu}
            </div>
        </div>
    );


     }
       
export default Menu;
