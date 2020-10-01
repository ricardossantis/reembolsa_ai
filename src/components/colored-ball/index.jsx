import React from "react";
import { Ball } from "./ball.js";

function ColoredBall({ color }) {
  return <Ball style={{ backgroundColor: color }} />;
}

export default ColoredBall;
