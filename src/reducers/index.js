import * as actions from "../actions";

const initialState = {
  mapCoords: {
    Latitude: 30,
    Longitude: -90
  },
  users: [
    {
      id: 1,
      password: "password",
      email: "company1@email.com",
      address: "1234 Main St Kansas City, MO",
      coords: {
        lat: 39.105,
        lng: -94.58
      },
      contact: "Person 1",
      company: "Company 1",
      donations: [{ id: "123" }]
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
      delivery: "no"
    },
    {
      id: 345,
      userId: 1,
      company: "Company 1",
      coords: {
        lat: 39.11,
        lng: -94.58
      },
      expiry: "1/20/2019",
      info: "soup and sandwiches",
      delivery: "no"
    }
  ]
};

export const reducer = (state = initialState, action) => {
  if (action.type === actions.CHANGE_COORDS) {
    return Object.assign({}, state, {
      mapCoords: action.coords
    });
  } else {
    return state;
  }
};

//   } else if (action.type === actions.ADD_DONATION) {
//     //add donation to donations and add donation id to users donation array
//   } else if (action.type === actions.UPDATE_DONATION) {
//     //update the donation and donation id in user donation array
//   } else if (action.type === actions.DELETE_DONATION) {
//     //delete donation from donations and from user donation array
//   }
