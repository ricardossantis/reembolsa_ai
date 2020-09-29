import React from "react";
import styled from "styled-components";
import SituationCard from "../situation-card";

function SituationList({ header }) {
  return (
    <MainContainer>
      <Header>{header}</Header>
      <SituationContainer>
        <Title>
          <TitleParagraph>Situação</TitleParagraph>
          <TitleParagraph>Reembolso</TitleParagraph>
        </Title>
        <SituationCard color="red">No. Ref 13 | Cat: Combustível</SituationCard>
      </SituationContainer>
    </MainContainer>
  );
}

export default SituationList;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const Header = styled.div`
  width: 80%;
  height: 10%;
  font-size: 1.8rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: rgba(54, 80, 131, 1);
  font-family: "Roboto";
`;

const SituationContainer = styled.div`
  width: 100%;
  height: 80%;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  width: 80%;
  height: 40px;
  font-size: 1.1rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
  color: rgba(54, 80, 131, 1);
  font-family: "Roboto";
`;

const TitleParagraph = styled.p`
  width: 50%;
`;
