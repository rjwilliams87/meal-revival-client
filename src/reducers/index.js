import * as actions from "../actions";

const initialState = {
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
  if (action.type === actions.CHANGE_COORDS) {
    return Object.assign({}, state, {
      mapCoords: action.coords
    });
  } else if (action.type === actions.GET_USER_INFO_SUCCESS) {
    return Object.assign({}, state, {
      profileView: action.user
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
