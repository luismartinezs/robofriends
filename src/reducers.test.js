import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import * as reducers from "./reducers";

describe("searchRobots", () => {
  it("Should return the initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    const initialStateSearch = {
      searchField: "",
    };
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: CHANGE_SEARCH_FIELD,
        payload: "abc",
      })
    ).toEqual({ searchField: "abc" });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false,
    error: "",
  };

  it("Should return the initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual({
      robots: [],
      isPending: false,
      error: "",
    });
  });

  it("Should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_PENDING,
      })
    ).toEqual({
      robots: [],
      isPending: true,
      error: "",
    });
  });

  it("Should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: "123", name: "Test", email: "test@gmail.com" }],
      })
    ).toEqual({
      robots: [{ id: "123", name: "Test", email: "test@gmail.com" }],
      isPending: false,
      error: "",
    });
  });

  it("Should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: REQUEST_ROBOTS_FAILED,
        payload: "NOOOOO!!!",
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: "NOOOOO!!!",
    });
  });
});
