import React from "react";
import { render, shallow } from "enzyme";
import Scroll from "./Scroll";

let wrapper;
beforeEach(() => {
  function LargeBox() {
    return <div style={{ height: "3000px", width: "100%" }} />;
  }
  wrapper = render(
    <Scroll>
      <LargeBox />
    </Scroll>
  );
});

it("expect to render children correctly", () => {
  expect(wrapper).toMatchSnapshot();
});
