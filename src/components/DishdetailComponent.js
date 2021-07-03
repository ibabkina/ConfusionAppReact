import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap'; // helps construct menu   

class Dishdetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null 
        }
    }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                    <CardImgOverlay>
                      <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>  
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    renderComments(comments) {
      if(comments!= null){
        return (
          <div>
            <h4>Comments</h4>
            <ul className ='list-unstyled'>
                {comments.map((comment) => {
                  return (
                    <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                  );
                })}  
            </ul>
          </div>
        )
      }

      else
            return(
                <div></div>
            );
      }

    render() {
      const selectedDish = this.props.dishSelected;

      if(selectedDish == null)  
        return(          
         <div></div>
      );

      return (
          // <div className="container">
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(selectedDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                  {this.renderComments(selectedDish.comments)}
                </div>
              </div>   
          // </div>
      );
    }
}

export default Dishdetail;
