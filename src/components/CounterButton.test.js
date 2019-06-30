import React from "react";
import { shallow, mount, render } from "enzyme";
// most of the time use shallow
// mount: full DOM render, requires full DOM API (JS DOM, headless browser, actual browser...)
// render: render components to static HTML (using cheerio lib), renders any children of current component (unlike shallow)
import CounterButton from "./CounterButton";

it("expect to render CounterButton component", () => {
  const mockColor = "red";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper.find('[id="counter"]').simulate("click");
  expect(wrapper.state()).toEqual({ count: 1 });
});
