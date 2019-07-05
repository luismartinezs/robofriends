import React from "react";
import { shallow } from "enzyme";
import SearchBox from "./SearchBox";

it("expect to render children correctly", () => {
  expect(shallow(<SearchBox />)).toMatchSnapshot();
});
