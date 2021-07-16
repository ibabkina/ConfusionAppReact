import { DISHES } from '../shared/dishes';

// When you implement the Reducer function, it takes two parameters (state and action).
// At this moment we haven't implemented any actions, we only have the default. The default
// return is DISHES as it is.
export const Dishes = (state = DISHES, action) => {
    switch(action.type) {
        default:
            return state;
    }
}