import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'; // helps construct menu   

class Dishdetail extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         selectedDish: null 
    //     }
    // }

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
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
                    <div class="container">
                    <li key={comment.id}>
                      <p>{comment.comment}</p>
                      <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                    </li>
                    </div>
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
      const selDish = this.props.dishSelected;

      if(selDish == null)  
        return(          
         <div></div>
      );

      return (
          <div className="container">
              <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(selDish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                  {this.renderComments(selDish.comments)}
                </div>
              </div>   
           </div>
      );
    }
}

export default Dishdetail;
