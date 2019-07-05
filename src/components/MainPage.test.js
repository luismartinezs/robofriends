import React from "react";
import { shallow } from "enzyme";
import MainPage from "./MainPage";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false,
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("renders MainPage without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("filters robots correctly", () => {
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "Jon",
        email: "jon@gmail.com",
      },
    ],
    searchField: "Jon",
    isPending: false,
  };
  let wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots()).toEqual([
    {
      id: 3,
      name: "Jon",
      email: "jon@gmail.com",
    },
  ]);
});

it("filters robots correctly 2", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "Jon",
        email: "jon@gmail.com",
      },
    ],
    searchField: "a",
    isPending: false,
  };
  let wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.instance().filterRobots()).toEqual([]);
});

it("shows loading message correctly", () => {
  const mockProps4 = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: true,
  };
  let wrapper4 = shallow(<MainPage {...mockProps4} />);
  expect(wrapper4).toMatchSnapshot();
});
