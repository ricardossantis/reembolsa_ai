import React from "react";
import renderer from "react-test-renderer";
import Button from "../index.jsx";

describe("Render Test", () => {
  it("renders a button", () => {
    const tree = renderer.create(<Button bckButton={"red"} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
