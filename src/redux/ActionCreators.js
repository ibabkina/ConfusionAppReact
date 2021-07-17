import * as ActionTypes from './ActionTypes';

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