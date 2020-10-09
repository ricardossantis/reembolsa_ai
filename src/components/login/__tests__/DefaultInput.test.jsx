import DefaultInput from "../default-input/index";
import React from "react";
import renderer from "react-test-renderer";

describe("Render Test", () => {
  it("renders DefaultInput", () => {
    const component = renderer.create(<DefaultInput/>).toJSON();
    expect(component).toMatchSnapshot();
  });
});

