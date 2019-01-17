import { createStore, applyMiddleware, combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { authReducer } from "../src/reducers/authReducer";
import thunk from "redux-thunk";
import { reducer } from "../src/reducers";
import { loadAuthToken } from "./local-storage";
import { setAuthToken, refreshAuthToken } from "./actions/auth";
const store = createStore(
  combineReducers({
    app: reducer,
    form: formReducer,
    auth: authReducer
  }),
  applyMiddleware(thunk)
);

const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
