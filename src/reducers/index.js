import {
  sync_actions,
  get_actions,
  delete_actions,
  put_actions,
  post_actions,
  auth_actions
} from "../actions";

const initialState = {
  userLoggedIn: false,
  mapCoords: {
    Latitude: 30,
    Longitude: -90
  },
  profileView: {
    id: 1,
    company: "Company ABC",
    contact: "Jimmy John",
    email: "company1@email.com",
    address: "1234 Main St Kansas City, MO",
    coords: {
      lat: 39.105,
      lng: -94.58
    },
    donations: [
      {
        id: 123,
        expiry: "1-20-2019",
        info: "catering leftovers",
        delivery: "yes",
        userId: 1
      },
      {
        id: 345,
        expiry: "1-21-2019",
        info: "Soup and sandwiches",
        delivery: "yes",
        userId: 1
      }
    ]
  },
  users: [
    {
      id: 1,
      company: "Company 1",
      contact: "billy John",
      email: "company1@email.com",
      address: "1234 Main St Kansas City, MO",
      coords: {
        lat: 39.105,
        lng: -94.58
      },
      donations: [
        {
          id: 123,
          expiry: "1-20-2019",
          info: "catering leftovers",
          delivery: "yes",
          userId: 1
        },
        {
          id: 345,
          expiry: "1-21-2019",
          info: "Soup and sandwiches",
          delivery: "yes",
          userId: 2
        }
      ]
    },
    {
      id: 2,
      company: "Company 2",
      contact: "Jane John",
      email: "company1@email.com",
      address: "4567 Main St Kansas City, MO",
      coords: {
        lat: 39.11,
        lng: -94.57
      },
      donations: [
        {
          id: 567,
          expiry: "1-20-2019",
          info: "catering leftovers",
          delivery: "yes"
        },
        {
          id: 890,
          expiry: "1-21-2019",
          info: "Soup and sandwiches",
          delivery: "yes"
        }
      ]
    }
  ],
  donations: [
    {
      id: 123,
      userId: 1,
      company: "Company 1",
      coords: {
        lat: 39.105,
        lng: -94.58
      },
      expiry: "1/20/2019",
      info: "soup and sandwiches",
      delivery: "no",
      userId: 1
    },
    {
      id: 345,
      userId: 2,
      company: "Company 2",
      coords: {
        lat: 39.11,
        lng: -94.58
      },
      expiry: "1/20/2019",
      info: "soup and sandwiches",
      delivery: "no",
      userId: 2
    }
  ]
};

export const reducer = (state = initialState, action) => {
  if (action.type === sync_actions.CHANGE_COORDS) {
    return Object.assign({}, state, {
      mapCoords: action.coords
    });
  } else if (action.type === get_actions.GET_USER_INFO_SUCCESS) {
    return Object.assign({}, state, {
      profileView: action.user,
      profileError: false
    });
  } else if (action.type === get_actions.GET_USER_INFO_ERROR) {
    return Object.assign({}, state, {
      profileError: true
    });
  } else if (action.type === get_actions.GET_ALL_DONATIONS_SUCCESS) {
    return Object.assign({}, state, {
      donations: action.donations,
      donationsError: false
    });
  } else if (action.type === get_actions.GET_ALL_DONATIONS_ERROR) {
    return Object.assign({}, state, {
      donationsError: true
    });
  } else if (action.type === post_actions.COMPLETE_PROFILE_SUCCESS) {
    return Object.assign({}, state, {
      profileComplete: action.profileComplete,
      profileError: false,
      userError: false
    });
  } else if (action.type === post_actions.COMPLETE_PROFILE_ERROR) {
    return Object.assign({}, state, {
      profileError: action.error,
      userError: true
    });
  } else if (action.type === post_actions.ADD_DONATION_SUCCESS) {
    return Object.assign({}, state, {
      donations: [...state.donations, action.donation],
      userError: false,
      donationError: false
    });
  } else if (action.type === post_actions.ADD_DONATION_ERROR) {
    return Object.assign({}, state, {
      donationError: action.error,
      userError: true
    });
  } else if (action.type === post_actions.SIGN_IN_SUCCESS) {
    return Object.assign({}, state, {
      currentUser: action.user,
      LoginError: false
    });
  } else if (action.type === post_actions.SIGN_IN_ERROR) {
    return Object.assign({}, state, {
      LoginError: true
    });
  } else if (action.type === post_actions.LOG_OUT_SUCCESS) {
  } else if (action.type === post_actions.LOG_OUT_ERROR) {
  } else if (action.type === post_actions.CREATE_NEW_USER_SUCCESS) {
    return Object.assign({}, state, {
      currentUser: action.user,
      userLoggedIn: true,
      userError: false,
      signUpError: false
    });
  } else if (action.type === post_actions.CREATE_NEW_USER_ERROR) {
    return Object.assign({}, state, {
      userError: true,
      signUpError: action.error
    });
  } else if (action.type === put_actions.UPDATE_DONATION_DETAILS_SUCCESS) {
  } else if (action.type === put_actions.UPDATE_DONATION_DETAILS_ERROR) {
  } else if (action.type === delete_actions.DELETE_DONATION_SUCCESS) {
  } else if (action.type === delete_actions.DELETE_DONATION_ERROR) {
  } else if (action.type === auth_actions.AUTH_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  } else if (action.type === auth_actions.SET_AUTH_TOKEN) {
    return Object.assign({}, state, {
      authToken: action.authToken
    });
  } else if (action.type === auth_actions.AUTH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      currentUser: action.currentUser
    });
  } else if (action.type === auth_actions.AUTH_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    });
  } else if (action.type === auth_actions.CLEAR_AUTH) {
    return Object.assign({}, state, {
      authToken: null,
      currentUser: null
    });
  } else {
    return state;
  }
};
