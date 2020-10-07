import React from "react";
import renderer from "react-test-renderer";
import ClientLogo from "../index";
import { useWindowSize } from "../../../system-general/header/hookWindowSize";

const clientLogo = {
  logo1: "logo1",
  logo2: "logo2",
  logo3: "logo3",
  logo4: "logo4",
  logo5: "logo5",
  logo6: "logo6",
  logo7: "logo7",
  logo8: "logo8",
};

jest.mock("../../../system-general/header/hookWindowSize", () => ({
  useWindowSize: jest.fn(),
}));

it("width < 768", () => {
  useWindowSize.mockImplementation(() => {
    return { width: 767 };
  });
  const tree = renderer.create(<ClientLogo {...clientLogo} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("width > 768", () => {
  useWindowSize.mockImplementation(() => {
    return { width: 769 };
  });
  const tree = renderer.create(<ClientLogo {...ClientLogo} />).toJSON();
  expect(tree).toMatchSnapshot();
});
