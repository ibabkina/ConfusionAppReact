import * as ActionTypes from './ActionTypes';
import { DISHES } from '../shared/dishes';

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
    setTimeout(() => {
        dispatch(addDishes(DISHES));
    }, 2000);
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