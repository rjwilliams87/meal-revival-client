export const dataSet1 = {
  mapCoords: {
    Latitude: 30,
    Longitude: -90
  },
  profileView: false,
  currentUser: false,
  allDonations: [
    {
      id: 111,
      expiry: "1-20-2019",
      info: "catering leftovers",
      delivery: "Yes",
      userId: 1,
      lat: 39.105,
      lng: -94.58
    }
  ]
};

export const seedUser1 = {
  id: 1,
  companyName: "Company 1",
  contactName: "Joe John",
  email: "company1@email.com",
  address: "1234 Main St Kansas City, MO",
  coords: {
    lat: 39.105,
    lng: -94.58
  },
  donations: [
    {
      id: 111,
      expiry: "1-20-2019",
      info: "catering leftovers",
      delivery: "Yes",
      userId: 1,
      lat: 39.105,
      lng: -94.58
    }
  ]
};

const seedState = {
  mapCoords: {
    Latitude: 39.105,
    Longitude: -94.58
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
  ],
  error: null,
  loading: null,
  authToken: null
};
