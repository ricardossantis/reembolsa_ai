import React from "react";
import renderer from "react-test-renderer";
import StyledError from "../styled-error";

describe("Render Test", () => {
  it("renders StyledError", () => {
    const component = renderer.create(<StyledError/>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
