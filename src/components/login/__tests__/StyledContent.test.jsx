import React from "react";
import renderer from "react-test-renderer";
import StyledContent from "../styled-content";

describe("Render Test", () => {
  it("renders StyledContent", () => {
    const component = renderer.create(<StyledContent />).toJSON();
    expect(component).toMatchSnapshot();
  });
});
