import React from "react";
import renderer from "react-test-renderer";
import ClientCard from "../index.jsx";
import FeedPhoto from "../card.jsx";
import CardFeed from "../card.jsx";
import { useWindowSize } from "../../../system-general/header/hookWindowSize";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

jest.mock("../../../system-general/header/hookWindowSize", () => ({
  useWindowSize: jest.fn(),
}));

Enzyme.configure({ adapter: new Adapter() });
describe("Render Test", () => {
  it("expect to photo min size", () => {
    useWindowSize.mockImplementation(() => {
      return { width: 81 };
    });
    const tree = renderer.create(<FeedPhoto />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("expect to card min", () => {
    useWindowSize.mockImplementation(() => {
      return { width: 230 };
    });
    const tree = renderer.create(<ClientCard />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("expect to card receive the props", () => {
    const tree = renderer.create(<CardFeed />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
