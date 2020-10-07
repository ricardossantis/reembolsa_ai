import React, { useState } from "react";
import TestRenderer from "react-test-renderer";
import LoginPage from "./index";

import "antd/dist/antd.css";

jest.mock("react-redux", () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => 1,
}));

jest.mock("react-router-dom", () => ({
  Link: { $$typeof: "Symbol(react.forward_ref)", displayName: "Link" },
  useHistory: { push: jest.fn() },
}));

test("Post authentication", () => {
  const tree = TestRenderer.create(<LoginPage />).toJSON();
  expected(tree).toMatchSnapshot();
});
