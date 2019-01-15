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
