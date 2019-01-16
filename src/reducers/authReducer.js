import * as actions from "../actions/auth";

const initialState = {
  currentUser: { id: 1 },
  userLoggedIn: true,
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
      userLoggedIn: null
    });
  } else if (action.type === actions.AUTH_REQUEST) {
    return Object.assign({
      loading: true,
      error: null
    });
  } else if (action.type === actions.AUTH_SUCCESS) {
    return Object.assign({
      currentUser: action.currentUser,
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
