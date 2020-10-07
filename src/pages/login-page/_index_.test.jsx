import React, { useState } from "react";
import { useEffect } from "react";
import TestRenderer from "react-test-renderer";
import LoginPage from "./index";

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  })) 
jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => ({user:{accessLevel:undefined}}),
}));

jest.mock("react-router-dom", () => ({
Link: ({children})=> <a>{children}</a>,
  useHistory:jest.fn(),
}));

test("Post authentication", () => {
  const tree = TestRenderer.create(<LoginPage />).toJSON();
  expect(tree).toMatchSnapshot();
});
