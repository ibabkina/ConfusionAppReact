export const ADD_COMMENT = 'ADD_COMMENT';
export const DISHES_LOADING = 'DISHES_LOADING'; // fetched from server
export const DISHES_FAILED = 'DISHES_FAILED'; // failed to fetch/load from a server
export const ADD_DISHES = 'ADD_DISHES'; // we want to add dishes into our store
// we don't have COMMENTS_LOADING because comments will be loaded behind the scenes.
// When we render our app, we first render the home component. By the time the home component is rendered,
// the comments will also be fetched in. so by the time we navigate to the dishdetail component, 
// the comments would have already been fetched in.
export const ADD_COMMENTS = 'ADD_COMMENTS';
export const COMMENTS_FAILED = 'COMMENTS_FAILED';
export const PROMOS_LOADING ='PROMOS_LOADING';
export const ADD_PROMOS = 'ADD_PROMOS';
export const PROMOS_FAILED = 'PROMOS_FAILED';
export const LEADERS_LOADING ='LEADERS_LOADING';
export const ADD_LEADERS = 'ADD_LEADERS';
export const LEADERS_FAILED = 'LEADERS_FAILED';
