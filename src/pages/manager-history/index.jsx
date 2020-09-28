import React from "react";
import styled from "styled-components";
import SituationCard from "../../components/situation-card";

function History() {
  return (
    <MainContainer>
      <Header>Histórico de Movimentações</Header>
      <SituationContainer>
        <Title>
          <TitleParagraph>Situação</TitleParagraph>
          <TitleParagraph>/</TitleParagraph>
          <TitleParagraph>Reembolso</TitleParagraph>
        </Title>
        <SituationCard color="red">No. Ref 13 | Cat: Combustível</SituationCard>
      </SituationContainer>
    </MainContainer>
  );
}

export default History;

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
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
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
  display: flex;
  justify-content: center;
  border-bottom: 1px solid black;
  margin-bottom: 20px;
`;

const TitleParagraph = styled.p`
  width: fit-content;
  margin: 0 30px 0 0;
`;
