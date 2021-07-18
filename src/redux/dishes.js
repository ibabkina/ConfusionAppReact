// import { DISHES } from '../shared/dishes';
import * as ActionTypes from './ActionTypes';

// This is dishes reducer
// When you implement the Reducer function, it takes two parameters (state and action).
// At this moment we haven't implemented any actions, we only have the default. The default
// return is DISHES as it is.
export const Dishes = (state = {
    isLoading: true,
    errMess: null,
    dishes: [] // empty
}, action) => {
    switch(action.type) { //reducers:
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errMess: null, dishes: action.payload}; //when the ADD_DISHES action
                                                                                    //is passed into this reducer, then
                                                                                    //whatever is passed in as a parameter 
                                                                                    //in the payload of the action object,
                                                                                    //that will be set to these dishes. 

        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload, dishes: []};

        default:
            return state;
    }
}