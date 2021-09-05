import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from './category';
import { tipReducer } from "./tip";


export const store = createStore(
    combineReducers({
        tip: tipReducer,
        category: categoryReducer
    }),
    applyMiddleware(thunk)
);