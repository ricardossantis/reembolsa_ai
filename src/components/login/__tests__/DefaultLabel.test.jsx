import DefaultLabel from "../default-label";
import React from "react";
import renderer from "react-test-renderer";

describe("Render Test", () => {
  it("renders DefaultLabel", () => {
    const component = renderer.create(<DefaultLabel/>).toJSON();
    expect(component).toMatchSnapshot();
  });
});

