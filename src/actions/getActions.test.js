import * as actions from "./getActions";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("getRequest", () => {
  it("should return action", () => {
    const action = actions.getRequest();
    expect(action.type).toEqual(actions.GET_REQUEST);
  });
});

describe("getUserInfoSuccess", () => {
  it("should return action and user", () => {
    const user = { id: 123 };
    const action = actions.getUserInfoSuccess(user);
    expect(action.type).toEqual(actions.GET_USER_INFO_SUCCESS);
    expect(action.user).toEqual(user);
  });
});

describe("getUserInfoError", () => {
  it("should return action and user", () => {
    const error = "error";
    const action = actions.getUserInfoError(error);
    expect(action.type).toEqual(actions.GET_USER_INFO_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("getAllDonationsSuccess", () => {
  it("should return action and donations", () => {
    const donations = [1, 2, 3, 4, 5, 6];
    const action = actions.getAllDonationsSuccess(donations);
    expect(action.type).toEqual(actions.GET_ALL_DONATIONS_SUCCESS);
    expect(action.donations).toEqual(donations);
  });
});

describe("getAllDonationsError", () => {
  it("should return action and error", () => {
    const error = "error";
    const action = actions.getAllDonationsError(error);
    expect(action.type).toEqual(actions.GET_ALL_DONATIONS_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("getUserDonationsSuccess", () => {
  it("should return action donations", () => {
    const donations = ["foo", 3, "bar"];
    const action = actions.getUserDonationsSuccess(donations);
    expect(action.type).toEqual(actions.GET_USER_DONATIONS_SUCCESS);
    expect(action.donations).toEqual(donations);
  });
});

describe("getUserDonationsError", () => {
  it("should return action and error", () => {
    const error = "error";
    const action = actions.getUserDonationsError(error);
    expect(action.type).toEqual(actions.GET_USER_DONATIONS_ERROR);
    expect(action.error).toEqual(error);
  });
});
