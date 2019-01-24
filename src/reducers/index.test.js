import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { reducer } from "./index";
import * as get_actions from "../actions/getActions";
import * as post_actions from "../actions/postActions";
import * as put_actions from "../actions/putActions";
import * as delete_actions from "../actions/deleteActions";
import * as sync_actions from "../actions/sync";
import { stat } from "fs";

configure({ adapter: new Adapter() });

describe("reducer", () => {
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

  it("should set initial state when nothing passed in", () => {
    const state = reducer(undefined, { type: "UNKOWN" });
    expect(state).toEqual(initialState);
  });

  it("should set coords on CHANGE_COORDS", () => {
    const coords = { lat: 33, lng: -94 };
    const state = reducer(initialState, sync_actions.changeCoords(coords));
    expect(state.mapCoords).toEqual(coords);
  });

  it("should set user on GET_USER_INFO_SUCCESS", () => {
    const user = { name: "Foo" };
    const state = reducer(initialState, get_actions.getUserInfoSuccess(user));
    expect(state.user).toEqual(user);
  });

  it("should set error on GET_USER_INFO_ERROR", () => {
    const error = "error";
    const state = reducer(initialState, get_actions.getUserInfoError(error));
    expect(state.error).toEqual(error);
  });

  it("should set user donations on GET_USER_DONATIONS_SUCCESS", () => {
    const donations = [{ info: "food" }];
    const state = reducer(
      initialState,
      get_actions.getUserDonationsSuccess(donations)
    );
    expect(state.userDonations).toEqual(donations);
  });

  it("should set error on GET_USER_DONATIONS_ERROR", () => {
    const error = "error";
    const state = reducer(
      initialState,
      get_actions.getUserDonationsError(error)
    );
    expect(state.error).toEqual(error);
  });

  it("should set donations on GET_ALL_DONATIONS_SUCCESS", () => {
    const donations = [{ id: 123 }];
    const state = reducer(
      initialState,
      get_actions.getAllDonationsSuccess(donations)
    );
    expect(state.donations).toEqual(donations);
  });

  it("should set error on GET_ALL_DONATIONS_ERROR", () => {
    const error = "error";
    const state = reducer(
      initialState,
      get_actions.getAllDonationsError(error)
    );
    expect(state.error).toEqual(error);
  });

  it("should set error on CREATE_NEW_USER_ERROR", () => {
    const error = "error";
    const state = reducer(initialState, post_actions.createNewUserError(error));
    expect(state.error).toEqual(error);
  });

  it("should set error on DELETE_DONATION_ERROR", () => {
    const error = "error";
    const state = reducer(
      initialState,
      delete_actions.deleteDonationError(error)
    );
    expect(state.error).toEqual(error);
  });

  it("should set error on COMPLETE_PROFILE_ERROR", () => {
    const error = "error";
    const state = reducer(
      initialState,
      put_actions.completeProfileError(error)
    );
    expect(state.error).toEqual(error);
  });
});
