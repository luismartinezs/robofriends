import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

it("expect to render Header component", () => {
  expect(shallow(<Header />)).toMatchSnapshot();
});

it("expect to not re-render if props do not change", () => {
  const wrapper = shallow(<Header />);
  const shouldComponentUpdate = jest.spyOn(
    Header.prototype,
    "shouldComponentUpdate"
  );
  expect(shouldComponentUpdate).toHaveBeenCalledTimes(0);
  wrapper.setProps({ newProp: "foo" });
  expect(shouldComponentUpdate).toHaveBeenCalledTimes(1);
});
