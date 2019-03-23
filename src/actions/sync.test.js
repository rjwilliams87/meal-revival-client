import * as actions from "./sync";

describe("changeCoords", () => {
  it("should reuturn action and coords", () => {
    const coords = { lat: 42, lng: -92 };
    const action = actions.changeCoords(coords);
    expect(action.type).toEqual(actions.CHANGE_COORDS);
    expect(action.coords).toEqual(coords);
  });
});
