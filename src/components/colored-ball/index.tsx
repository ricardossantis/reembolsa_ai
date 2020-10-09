import React from "react";
import { Ball } from "./ball";
interface Props {
  color: string;
}
function ColoredBall({ color }: Props) {
  return <Ball style={{ backgroundColor: color }} />;
}

export default ColoredBall;
