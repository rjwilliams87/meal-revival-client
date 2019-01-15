import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import { reducer } from "../src/reducers";

export default createStore(
  combineReducers({ mealRevival: reducer, form: formReducer }),
  applyMiddleware(thunk)
);
