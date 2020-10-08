import React from "react";
import renderer from "react-test-renderer";
import NewUser from "../index";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => ({
    user: "edson",
    id: 1,
  })),
}));

it("Register New User Success", () => {
  const tree = renderer.create(<NewUser />).toJSON();
  expect(tree).toMatchSnapshot();
});
