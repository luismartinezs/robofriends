import React from "react";
import { shallow, mount, render } from "enzyme";
// most of the time use shallow
// mount: full DOM render, requires full DOM API (JS DOM, headless browser, actual browser...)
// render: render components to static HTML (using cheerio lib), renders any children of current component (unlike shallow)
import Card from "./Card";

it("expect to render Card component", () => {
  expect(shallow(<Card />).length).toEqual(1);
});
