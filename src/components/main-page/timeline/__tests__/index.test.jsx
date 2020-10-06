import React from "react";
import renderer from "react-test-renderer";
import MainTimeline from "../index";
import { useWindowSize } from "../../../system-general/header/hookWindowSize.js";

const timelineItem = {
  item1: "test1",
  item2: "test2",
  item3: "test3",
  item4: "test4",
  item5: "test5",
  item6: "test6",
  item7: "test7",
  item8: "test8",
  item9: "test9",
  item10: "test10",
};

jest.mock("../../../system-general/header/hookWindowSize.js", () => ({
  useWindowSize: jest.fn(),
}));

it("width < 768", () => {
  useWindowSize.mockImplementation(() => {
    return { width: 767 };
  });
  const tree = renderer.create(<MainTimeline {...timelineItem} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("width > 768", () => {
  useWindowSize.mockImplementation(() => {
    return { width: 769 };
  });
  const tree = renderer.create(<MainTimeline {...timelineItem} />).toJSON();
  expect(tree).toMatchSnapshot();
});
