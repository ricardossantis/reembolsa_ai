import React from "react";
import styled from "styled-components";
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

const Card = styled.div`
  width: 80%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 20px;
`;

const DisplayInfo = styled.div`
  width: 50%;
  height: 60px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
