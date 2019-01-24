import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { DeleteModal } from "./DeleteModal";
configure({ adapter: new Adapter() });

describe("<DeleteModal />", () => {
  it("should render without crashing", () => {
    shallow(<DeleteModal />);
  });

  it("should render btn with proper id", () => {
    const id = "bizz";
    const wrapper = shallow(<DeleteModal btn_id={id} />);
    expect(wrapper.find("button").html()).toEqual(
      '<button class="btn--red btn modal__btn" id="bizz">Delete</button>'
    );
  });

  //   it("should call dispatch on click", () => {
  //     const dispatch = jest.fn(() => Promise.resolve());
  //     const id = "foo";
  //     const wrapper = shallow(
  //       <DeleteModal
  //         dispatch={dispatch}
  //         handleDeleteBtn={jest.fn()}
  //         btn_id={id}
  //       />
  //     );
  //     wrapper.find("button").simulate("click");
  //     expect(dispatch).toHaveBeenCalled();
  //   });
});
