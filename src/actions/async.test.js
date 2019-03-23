import React from "react";
import * as get_actions from "./getActions";
import * as delete_actions from "./deleteActions";
import * as post_actions from "./postActions";
import * as put_actions from "./putActions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

//setup mock response from fetch req
const mockResponse = (status, statusText, response, body) => {
  return new window.Response(response, {
    status,
    statusText,
    headers: {
      "Content-type": "application/json"
    },
    body
  });
};

//test get req
describe("getUserInfo", () => {
  it("should dispatch correct actions", () => {
    const store = mockStore({});
    const id = 123;
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockResponse(200, null, "{}")));
    const expectedActions = [
      {
        type: get_actions.GET_REQUEST
      },
      { type: get_actions.GET_USER_INFO_SUCCESS, user: {} }
    ];
    return store.dispatch(get_actions.getUserInfo(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("getUserDonations", () => {
  it("should dispatch correct actions", () => {
    const store = mockStore({});
    const id = 123;
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockResponse(200, null, "{}")));
    const expectedActions = [
      { type: get_actions.GET_USER_DONATIONS_SUCCESS, donations: {} }
    ];
    return store.dispatch(get_actions.getUserDonations(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

describe("getAllDonations", () => {
  it("should dispatch the correct actions", () => {
    const store = mockStore({});
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockResponse(200, null, "{}")));
    const expectedActions = [
      { type: get_actions.GET_ALL_DONATIONS_SUCCESS, donations: {} }
    ];
    return store.dispatch(get_actions.getAllDonations()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

//test delete req
describe("deleteDonation", () => {
  it("should dispatch the correct actions", () => {
    const id = 123;
    const store = mockStore({});
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockResponse(204, null, "{}")));
    const expectedActions = [
      { type: delete_actions.DELETE_REQUEST },
      { type: delete_actions.DELETE_DONATION_SUCCESS }
    ];
    return store.dispatch(delete_actions.deleteDonation(id)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

//test post req
describe("addUserDonation", () => {
  it("should dispatch correct actions", () => {
    const store = mockStore({});
    window.fetch = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockResponse(200, null, "{}")));
    const expectedActions = [
      { type: post_actions.ADD_DONATION_SUCCESS, donation: {} }
    ];
    return store.dispatch(post_actions.addUserDonation()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
