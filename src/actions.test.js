import * as actions from "./actions";
import nock from "nock";

import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED,
} from "./constants";

import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const mockStore = configureMockStore([thunkMiddleware]);

it("should create an action to search robots", () => {
  const text = "wooo";
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text,
  };
  expect(actions.setSearchField(text)).toEqual(expectedAction);
});

it("handles requesting robots API", async () => {
  const store = mockStore({});
  await store.dispatch(actions.requestRobots());
  const action = store.getActions();
  const expectedAction = {
    type: REQUEST_ROBOTS_PENDING,
  };
  expect(action[0]).toEqual(expectedAction);
});

// it("handles successful robots request", async () => {
//   const robots = { id: "123", name: "Test", email: "test@gmail.com" };

//   nock("https://jsonplaceholder.typicode.com")
//     .get("/users")
//     .reply(200, robots);

//   const store = mockStore({});
//   await store.dispatch(actions.requestRobots());
//   const action = store.getActions();
//   console.log("action: ", action);
//   const expectedAction = { type: REQUEST_ROBOTS_SUCCESS, payload: robots };
//   expect(action[1]).toEqual(expectedAction);
// });
