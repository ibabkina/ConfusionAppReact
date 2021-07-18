import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

//This function creates an action object. after defining the action object you 
// you send it to the store. This is going to send various parts of the comment to the store
// so it should change just the comment's part of the state.
export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    }
});

// Thunk
export const fetchDishes = () => (dispatch) => {
    dispatch((dishesLoading(true)));

    // after 2000 mlsec (2 sec) delay will push dishes into the state of the store
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000);

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message); // when you don't hear back anything from the server
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({  //we create action for the ADD_DISHES type, 
    type: ActionTypes.ADD_DISHES,       //its payload is carring dishes here. dishes will be retrived
    payload: dishes                     //in the dishes reducer when the dishes property is set equal to that thing
});

// Thunk
// we don't have COMMENTS_LOADING because comments will be loaded behind the scenes.
// When we render our app, we first render the home component. By the time the home component is rendered,
// the comments will also be fetched in. so by the time we navigate to the dishdetail component, 
// the comments would have already been fetched in.
export const fetchComments = () => (dispatch) => {
    // dispatch((dishesLoading(true))); //we're not setting up commentsLoading, we don't need it. We go directly and fetch.
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({  //we create action for the ADD_DISHES type, 
    type: ActionTypes.ADD_COMMENTS,       //its payload is carring dishes here. dishes will be retrived
    payload: comments                     //in the dishes reducer when the dishes property is set equal to that thing
});

//Thunk
export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});

//Now need to update reducers