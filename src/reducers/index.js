import * as get_actions from "../actions/getActions";
import * as post_actions from "../actions/postActions";
import * as put_actions from "../actions/putActions";
import * as delete_actions from "../actions/deleteActions";
import * as sync_actions from "../actions/sync";

const initialState = {
  mapCoords: {
    Latitude: 39.105,
    Longitude: -94.58
  },
  user: null,
  userDonations: null,
  donations: null,
  error: false,
  loading: false
};

export const reducer = (state = initialState, action) => {
  if (action.type === sync_actions.CHANGE_COORDS) {
    return Object.assign({}, state, {
      mapCoords: action.coords
    });
  } else if (action.type === get_actions.GET_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  } else if (action.type === get_actions.GET_USER_INFO_SUCCESS) {
    return Object.assign({}, state, {
      user: action.user,
      error: null,
      loading: false
    });
  } else if (action.type === get_actions.GET_USER_INFO_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === get_actions.GET_USER_DONATIONS_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: null,
      userDonations: action.donations
    });
  } else if (action.type === get_actions.GET_USER_DONATIONS_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === get_actions.GET_ALL_DONATIONS_SUCCESS) {
    return Object.assign({}, state, {
      donations: action.donations,
      error: null,
      loading: false
    });
  } else if (action.type === get_actions.GET_ALL_DONATIONS_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === post_actions.ADD_DONATION_SUCCESS) {
    console.log(action);
    return Object.assign({}, state, {
      error: null,
      loading: false,
      userDonations: [...this.state.userDonations, action.donation]
    });
  } else if (action.type === post_actions.ADD_DONATION_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === post_actions.POST_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  } else if (action.type === post_actions.CREATE_NEW_USER_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      error: false
    });
  } else if (action.type === post_actions.CREATE_NEW_USER_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === delete_actions.DELETE_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  } else if (action.type === delete_actions.DELETE_DONATION_SUCCESS) {
    return Object.assign({}, state, {
      error: null,
      loading: false
    });
  } else if (action.type === delete_actions.DELETE_DONATION_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else if (action.type === put_actions.PUT_REQUEST) {
    return Object.assign({}, state, {
      error: null,
      loading: true
    });
  } else if (action.type === put_actions.COMPLETE_PROFILE_SUCCESS) {
    return Object.assign({}, state, {
      error: null,
      loading: false
    });
  } else if (action.type === put_actions.COMPLETE_PROFILE_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  } else {
    return state;
  }
};
