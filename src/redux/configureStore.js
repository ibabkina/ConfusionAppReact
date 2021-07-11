import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
    // Go to App.js file to make updates to use this store
}