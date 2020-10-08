import React from "react";
import renderer from "react-test-renderer";
import SystemButton from "../index";

it("Emulating cancel", () => {
  const tree = renderer
    .create(
      <SystemButton
        cancel={() => {
          "Operação cancelada";
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("Emulating confirm", () => {
  const tree = renderer
    .create(
      <SystemButton
        confirm={() => {
          "Operação confirmada";
        }}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
