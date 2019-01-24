import * as actions from "./putActions";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("putRequest", () => {
  it("should return action", () => {
    const action = actions.putRequest();
    expect(action.type).toEqual(actions.PUT_REQUEST);
  });
});

describe("completeProfileSuccess", () => {
  it("should return action", () => {
    const action = actions.completeProfileSuccess();
    expect(action.type).toEqual(actions.COMPLETE_PROFILE_SUCCESS);
  });
});

describe("completeProfileError", () => {
  it("should return action and error", () => {
    const error = "error";
    const action = actions.completeProfileError(error);
    expect(action.type).toEqual(actions.COMPLETE_PROFILE_ERROR);
    expect(action.error).toEqual(error);
  });
});
