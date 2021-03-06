import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap'; // helps construct menu
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

    //  function RenderMenuItem(props)  
     function RenderMenuItem({ dish, onClick })  {
        return(
          // <Card onClick={() => this.props.onClick(dish.id)}> We remove this.props
          // before .onClick because this onClick is coming in as a parameter here
            <Card>
              <Link to={`/menu/${dish.id}`}> 
              {/* the corresponding value will be replaced here with dish from DISHES */}
              <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} /> 
              {/* Now we can go and delete all the imgs from assets folder other than logo.png -logo is only one that kept localy now */}
              <CardImgOverlay>
                  <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
            </Link>
            </Card>
        );
     }
     const Menu = (props) => {
      // const menu = this.props.dishes.map((dish) => { Have to change 
      // this.props.dishes.map((dish) to props.dishes.map((dish) because
      // it's not this.props, props is coming in as the parameter for this 
      // function
      const menu = props.dishes.dishes.map((dish) => {
        return (
          // <div  className="col-12 col-md-5 m-1">
          //   <Card key={dish.id}
          // {/* onClick={() => this.props.onClick(dish.id)}> */}
          <div key={dish.id} className="col-12 col-md-5 m-1">
              <RenderMenuItem dish={dish} />
          </div>
        );
    });

    if(props.dishes.isLoading) {
      return(
        <div className="container">
          <div className="row">
            <Loading />
          </div>
        </div>
      );
    }
    else if (props.dishes.errMess) {
      return(
      <div className="container">
          <div className="row">
            <h4>{props.dishes.errMess}</h4>
          </div>
        </div>
      );
    }
    else
      return (
          <div className="container">
            <div className="row">
              <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Menu</BreadcrumbItem>
              </Breadcrumb>
              <div className="col-12">
                <h3>Menu</h3>
                <hr />
              </div>
            </div>
              <div className="row">
                  {menu}
              </div>
          </div>
      );


     }
       
export default Menu;
