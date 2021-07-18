import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createForms } from 'react-redux-form';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { InitialFeedback } from './forms';

export const ConfigureStore = () => {
    const store = createStore(
        // To recompose/compose the overall global State, we have to map these reducers into
        // each of 4 propeties:
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({            //will add in necessary reducer functions and state info in the store
                feedback: InitialFeedback // we don't need to write reducers or action creators, React-Redux-Form fills in all
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
    // Go to App.js file to make updates to use this store
}