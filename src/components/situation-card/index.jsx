import React from "react";
import { Card, DisplayInfo } from "./card.js";
import ColoredBall from "../colored-ball";

function SituationCard({ color, children }) {
  return (
    <Card>
      <ColoredBall color={color} />
      <DisplayInfo>{children}</DisplayInfo>
    </Card>
  );
}

export default SituationCard;
