import React from "react";
import renderer from "react-test-renderer";
import DefaultForm from "../default-form";

describe("Render Test", () => {
  it("renders DefaultForm", () => {
    const component = renderer.create(<DefaultForm/>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
