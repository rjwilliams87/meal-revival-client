import * as actions from "./postActions";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("postRequest", () => {
  it("should return action", () => {
    const action = actions.postRequest();
    expect(action.type).toEqual(actions.POST_REQUEST);
  });
});

describe("createNewUserSuccess", () => {
  it("should return action and user", () => {
    const user = { id: 123, name: "baz" };
    const action = actions.createNewUserSuccess(user);
    expect(action.type).toEqual(actions.CREATE_NEW_USER_SUCCESS);
    expect(action.user).toEqual(user);
  });
});

describe("createNewUserError", () => {
  it("should return action and error", () => {
    const error = "error";
    const action = actions.createNewUserError(error);
    expect(action.type).toEqual(actions.CREATE_NEW_USER_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("addDonationSuccess", () => {
  it("should return action and donation", () => {
    const donation = { id: 893, info: "lorem ipsum" };
    const action = actions.addDonationSuccess(donation);
    expect(action.type).toEqual(actions.ADD_DONATION_SUCCESS);
    expect(action.donation).toEqual(donation);
  });
});

describe("addDonationError", () => {
  it("should return action and error", () => {
    const error = "error";
    const action = actions.addDonationError(error);
    expect(action.type).toEqual(actions.ADD_DONATION_ERROR);
    expect(action.error).toEqual(error);
  });
});
