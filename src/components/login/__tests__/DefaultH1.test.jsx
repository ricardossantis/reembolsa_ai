import DefaultH1 from "../default-h1";
import React from "react";
import renderer from "react-test-renderer";

describe("Render Test", () => {
  it("renders DefaultH1", () => {
    const component = renderer.create(<DefaultH1/>).toJSON();
    expect(component).toMatchSnapshot();
  });
});

