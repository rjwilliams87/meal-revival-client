import * as actions from "./auth";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("setAuthToken", () => {
  it("should return the action", () => {
    const token = "fooBarBizBang";
    const action = actions.setAuthToken(token);
    expect(action.type).toEqual(actions.SET_AUTH_TOKEN);
    expect(action.authToken).toEqual(token);
  });
});

describe("clearAuth", () => {
  it("should return the action", () => {
    const action = actions.clearAuth();
    expect(action.type).toEqual(actions.CLEAR_AUTH);
  });
});

describe("authRequest", () => {
  it("should return the action", () => {
    const action = actions.authRequest();
    expect(action.type).toEqual(actions.AUTH_REQUEST);
  });
});

describe("authSuccess", () => {
  it("should return the action and user", () => {
    const currentUser = { id: "foo" };
    const action = actions.authSuccess(currentUser);
    expect(action.type).toEqual(actions.AUTH_SUCCESS);
    expect(action.currentUser).toEqual(currentUser);
  });
});

describe("authError", () => {
  it("should return the action and error", () => {
    const error = "error";
    const action = actions.authError(error);
    expect(action.type).toEqual(actions.AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("storeAuthInfo", () => {
  it("should dispatch setAuthToken and authSuccess", () => {
    const dispatch = jest.fn();
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    const action = actions.storeAuthInfo(token, dispatch);
    expect(dispatch).toHaveBeenCalled();
  });
});
