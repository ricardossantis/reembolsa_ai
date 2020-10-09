import React from "react";
import renderer from "react-test-renderer";
import StyledInputPassword from "../styled-input-password";

describe("Render Test", () => {
  it("renders StyledInputPassword", () => {
    const component = renderer.create(<StyledInputPassword/>).toJSON();
    expect(component).toMatchSnapshot();
  });
});
