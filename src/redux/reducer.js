import { DISHES } from '../shared/dishes'; //go one level up to src first ..
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

//Contains exactly the same structure as you see in main component. Remove state 
//from the main component completely
export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS     
};

export const Reducer = (state = initialState, action) => {
    return state;
};