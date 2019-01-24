import * as actions from "./sync";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("changeCoords", () => {
  it("should reuturn action and coords", () => {
    const coords = { lat: 42, lng: -92 };
    const action = actions.changeCoords(coords);
    expect(action.type).toEqual(actions.CHANGE_COORDS);
    expect(action.coords).toEqual(coords);
  });
});
