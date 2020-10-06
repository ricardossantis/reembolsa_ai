import React, { useState } from "react";
import TestRenderer from "react-test-renderer";
import LoginPage from "./index";

const setStateSpy = jest.fn();
jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: ()=>{return {}},
}));
test("Post authentication", () => {
  const tree = TestRenderer.create(<LoginPage />).toJSON();
  expected(tree).toMatchSnapshot();
});