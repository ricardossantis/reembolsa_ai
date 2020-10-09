import React from "react";
import renderer from "react-test-renderer";
import { useSelector } from "react-redux";
import NewUser from "../index";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => ({
    user: "edson",
    id: 1,
    auth: "token",
  })),
}));

it("register new user success", () => {
  const tree = renderer.create(<NewUser />).toJSON();
  expect(tree).toMatchSnapshot();
});

describe("get input behavior", () => {
  it("get input values", () => {
    useSelector.mockImplementation({
      user: "edson",
      id: 1,
      auth: "token",
    });
  });
});
