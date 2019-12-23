import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from 'redux-thunk';

/*  
    *
    * In this file, we define a store where we indicate to our project what is the file that will contains our app state
    * => creation of the store
    * 
*/

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;