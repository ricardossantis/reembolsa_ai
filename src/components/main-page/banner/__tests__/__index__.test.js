import React from "react";
import renderer from "react-test-renderer";
import Banner from "../index.jsx";
import { useWindowSize } from "../../../system-general/header/hookWindowSize";
import Enzyme  from "enzyme";
import Adapter from "enzyme-adapter-react-16";
jest.mock("../../../system-general/header/hookWindowSize", () => ({
  useWindowSize: jest.fn(),
}));
Enzyme.configure({ adapter: new Adapter() });
describe("Render Test", () => {
  it("expect to render banner min", () => {
    useWindowSize.mockImplementation(() => {
      return { width: 910 };
    });
    const tree = renderer.create(<Banner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("expect to render banner max", () => {
    useWindowSize.mockImplementation(() => {
      return { width: 930 };
    });
    const tree = renderer.create(<Banner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
