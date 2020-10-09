import DefaultFormItem from "../default-form-item/index";
import React from "react";
import renderer from "react-test-renderer";

describe("Render Test", () => {
  it("renders DefaultFormItem", () => {
    const component = renderer.create(<DefaultFormItem/>).toJSON();
    expect(component).toMatchSnapshot();
  });
});

