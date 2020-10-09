import React from "react";
import renderer from "react-test-renderer";
import { useSelector } from "react-redux";
import NewUser from "../index";
//import { shallow } from "enzyme";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => ({
    user: "edson",
    id: 1,
    auth: "token",
  })),
}));

describe("behavior", () => {
  it("retrieving redux state data", () => {
    useSelector.mockImplementation({
      user: "edson",
      id: 1,
      auth: "token",
    });
    expect(useSelector).toMatchSnapshot();
  });
});
