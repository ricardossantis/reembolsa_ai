import { authentication } from "../auth";

const defaultState = {
  auth: "",
  user: {},
  err: "",
};

describe("LOGIN", () => {
  const state = {
    auth: "working",
    user: { name: "John Doe" },
    err: "",
  };

  it("logins", () => {
    const action = { type: "LOGIN", auth: state.auth, user: state.user };
    const reducerResult = authentication(defaultState, action);

    expect(reducerResult).toStrictEqual(state);
  });
});

describe("ERROR", () => {
  const state = {
    auth: "",
    user: {},
    err: "404",
  };

  it("errors", () => {
    const action = { type: "ERROR", error: state.err };
    const reducerResult = authentication(defaultState, action);

    expect(reducerResult).toStrictEqual(state);
  });
});

describe("LOGOUT", () => {
  const state = {
    auth: "",
    user: {},
    err: "",
  };

  it("logs out", () => {
    const action = { type: "LOGOUT" };
    const reducerResult = authentication(defaultState, action);

    expect(reducerResult).toStrictEqual(state);
  });
});
