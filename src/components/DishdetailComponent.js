import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button,
  Modal, ModalHeader, ModalBody, Row, Col, Form, FormGroup, Input, Label } from 'reactstrap'; // helps construct menu   
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len)
const minLength = (len) => (val) => (val) && (val.length >= len)

class CommentForm extends Component {

  constructor(props) {
      super(props);

      this.state = {
        isNavOpen: false, // added from the lecture
        isModalOpen: false
      };
      
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
  }
  
  toggleModal() {
    this.setState({
        isModalOpen: !this.state.isModalOpen
    });
  }

  handleSubmit(values) {
      this.toggleModal(); // added from the lecture to close alert
      // console.log("Current State is: " + JSON.stringify(values));
      // alert("Current State is: " + JSON.stringify(values));
      this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
  }

  render() {
       return (
          <div>
              <Button outline onClick={this.toggleModal}>  
                  <span className="fa fa-pencil fa-lg" /> Submit Comment
              </Button>
              {/* <div className="col-12"> */}
              {/* <div className="col-12 col-md-9"> */}
              <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                                <Label htmlFor="rating" md={2}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" id="rating" name="rating"
                                       className="form-control">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                      </Control.select>   
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="author">Your Name</Label>
                                    <Control.text model=".author" id="author" name="author"
                                        placeholder="Your Name" className="form-control"
                                        validators={{
                                            required, minLength:minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                    <Errors
                                        className="text-danger" //red color
                                        model=".author"
                                        show="touched" // show this message only if item is touched
                                        messages={{
                                            required: 'Required. ',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                <Label htmlFor="comment">Comment</Label>
                                    <Control.textarea model=".comment" id="comment" name="comment"
                                        rows="6" className="form-control" />
                                </Col>
                            </Row>
                            {/* <Row className="form-group"> */}
                                {/* <Col md={12}> */}
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
                                {/* </Col> */}
                            {/* </Row> */}
                        </LocalForm>
                    </ModalBody>
                </Modal>
                {/* </div> */}
                {/* </div> */}
             
          </div>
      );
  }
}



//User defined components always start with Capital letter
function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
       <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
            <Card>
                <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
            </FadeTransform>
    </div>
  );
}

function RenderComments({ comments, postComment, dishId }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <h4>Comments</h4>
      <ul className='list-unstyled'>
      <Stagger in>
          {comments.map((comment) => {
              return (
              <Fade in>
                  <li key={comment.id}>
                  <p>{comment.comment}</p>
                  <p>-- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                  </li>
              </Fade>
              );
          })}
      </Stagger>
      </ul>
      <CommentForm dishId={dishId} postComment={postComment} />
    </div>
  )
}

// Convert render() function into Functional component
const Dishdetail = (props) => {
  if(props.isLoading) {
    return(
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );
  }
  else if (props.errMess) {
    return(
      <div className="container">
          <div className="row">
            <h4>{props.errMess}</h4>
          </div>
        </div>
    );
  }
  else if (props.dish != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.dish.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {/* {this.renderDish(this.props.dishSelected)} */}
          <RenderDish dish={props.dish} />
          {/* {this.renderComments(this.props.dishSelected.comments)} */}
          <RenderComments comments={props.comments} 
              postComment={props.postComment} 
              dishId={props.dish.id} />
        </div>
      </div>
    );
  else
    return (
      <div></div>
    );
}

export default Dishdetail;
