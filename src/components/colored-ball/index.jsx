import React from "react";
import styled from "styled-components";

function ColoredBall({ color }) {
  return <Ball style={{ backgroundColor: color }} />;
}

export default ColoredBall;

const Ball = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;
