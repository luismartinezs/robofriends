import React from "react";
import { render, shallow } from "enzyme";
import ErrorBoundary from "./ErrorBoundary";

let wrapper;
beforeEach(() => {
  function HelloWorld() {
    return <h1>Hello World</h1>;
  }
  wrapper = render(
    <ErrorBoundary>
      <HelloWorld />
    </ErrorBoundary>
  );
});

it("expect to render children correctly", () => {
  expect(wrapper.html()).toBe("Hello World");
});

it("expect to render error message correctly", () => {
  function Something() {
    return null;
  }
  const wrapper2 = shallow(
    <ErrorBoundary>
      <Something />
    </ErrorBoundary>
  );
  const error = new Error("hi!");
  wrapper2.find(Something).simulateError(error);
  expect(wrapper2.state()).toHaveProperty("hasError", true);
  expect(wrapper2.html()).toBe("<h1>Oops. That is not good</h1>");
});
