// import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

//This is comments reducer
export const Comments = (state = {
    errMess: null,
    comments: []
    }, action) => {
    switch(action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errMess: null, comments: action.payload};
        
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, comments: []};

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.comments.length;
            comment.date = new Date().toISOString();
            return {...state, comments: state.comments.concat(comment)}; //doesn't mutate the state, returns a new object
            // ...state === whatever was in the state
        default:
            return state;
    }
}