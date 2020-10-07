import React from "react";
import { Card, DisplayInfo } from "./card.js";
import ColoredBall from "../colored-ball";

interface Props {
  color: string;
  children: React.ReactNode;
}

function SituationCard({ color, children }: Props) {
  return (
    <Card>
      <ColoredBall color={color} />
      <DisplayInfo>{children}</DisplayInfo>
    </Card>
  );
}

export default SituationCard;
