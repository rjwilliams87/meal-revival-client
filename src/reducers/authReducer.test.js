import React from "react";
import { authReducer } from "./authReducer";
import * as actions from "../actions/auth";

describe("authReducer", () => {
  const initialState = {
    currentUser: null,
    loggedIn: false,
    error: null,
    loading: false
  };
  const currentUser = { id: 1, email: "email", password: "password" };
  const error = "validation error";
  const authState = {
    currentUser: currentUser,
    loggedIn: true,
    error: null,
    loading: false
  };

  it("should set initial state when nothing passed in", () => {
    const state = authReducer(undefined, { type: "UNKNOWN" });
    expect(state).toEqual(initialState);
  });

  // it("should set token on SET_AUTH_TOKEN", () => {
  //   const state = authReducer(initialState, actions.setAuthToken(authToken));
  //   expect(state.authToken).toEqual(authToken);
  // });

  // it("should remove authToken on CLEAR_AUTH", () => {
  //   const state = authReducer(authState, actions.clearAuth());
  //   expect(state).toEqual(initialState);
  // });

  it("should update user on AUTH_SUCCESS", () => {
    const state = authReducer(initialState, actions.authSuccess(currentUser));
    expect(state.currentUser).toEqual(authState.currentUser);
  });

  it("should set error on AUTH_ERROR", () => {
    const state = authReducer(initialState, actions.authError(error));
    expect(state.error).toEqual(error);
  });
});
