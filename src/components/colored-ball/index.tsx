import React from "react";
import { Ball } from "./ball.jsx";
interface Props {
  color: string;
}
function ColoredBall({ color }: Props) {
  return <Ball style={{ backgroundColor: color }} />;
}

export default ColoredBall;
