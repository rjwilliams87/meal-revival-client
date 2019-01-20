import * as actions from "../actions/auth";

const initialState = {
  currentUser: null,
  loggedIn: false,
  authToken: null,
  error: null,
  loading: false
};

export const authReducer = (state = initialState, action) => {
  if (action.type === actions.SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === actions.CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null,
      loggedIn: null
    });
  } else if (action.type === actions.AUTH_REQUEST) {
    return Object.assign({
      loading: true,
      error: null
    });
  } else if (action.type === actions.AUTH_SUCCESS) {
    console.log("auth success reducer");
    console.log(action);
    return Object.assign({
      currentUser: action.currentUser,
      loggedIn: true,
      loading: false,
      error: null
    });
  } else if (action.type === actions.AUTH_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else {
    return state;
  }
};
