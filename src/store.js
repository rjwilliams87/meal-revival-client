import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "../src/reducers/authReducer";
import thunk from "redux-thunk";
import { reducer } from "../src/reducers";
export default createStore(
  combineReducers({
    app: reducer,
    form: formReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);
