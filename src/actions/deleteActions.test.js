import * as actions from "./deleteActions";

describe("deleteDonationSuccess", () => {
  it("should return the action", () => {
    const action = actions.deleteDonationSuccess();
    expect(action.type).toEqual(actions.DELETE_DONATION_SUCCESS);
  });
});

describe("deleteDonationError", () => {
  it("should return the action and error", () => {
    const error = "error";
    const action = actions.deleteDonationError(error);
    expect(action.type).toEqual(actions.DELETE_DONATION_ERROR);
    expect(action.error).toEqual(error);
  });
});

describe("deleteRequest", () => {
  it("should return the action", () => {
    const action = actions.deleteRequest();
    expect(action.type).toEqual(actions.DELETE_REQUEST);
  });
});
