import React, { useState } from "react";
import {
  MainContainer,
  Header,
  SituationContainer,
  SituationCardContainer,
  Title,
  TitleParagraph,
  StyledModal,
} from "./situation.js";
import SituationCard from "../situation-card";

function SituationList({ header, list, title }) {
  const [visible, setVisibility] = useState(false);
  const [modalList, setModalList] = useState({});

  const showModal = (item) => {
    setModalList(item);
    setVisibility(true);
  };

  const handleOk = (e) => {
    setVisibility(false);
  };

  const handleCancel = (e) => {
    setVisibility(false);
  };

  return (
    <MainContainer>
      <Header>{header}</Header>
      <SituationContainer>
        <Title>
          {title && <TitleParagraph>Situação</TitleParagraph>}
          {title && <TitleParagraph>Reembolso</TitleParagraph>}
        </Title>
        {list &&
          list.map((item, index) => (
            <SituationCardContainer onClick={() => showModal(item)} key={index}>
              <SituationCard color={item.color}>
                {item.color !== "blue" ? item.description : item.full_name}
              </SituationCard>
            </SituationCardContainer>
          ))}
      </SituationContainer>
      <StyledModal visible={visible} onOk={handleOk} onCancel={handleCancel}>
        {modalList && (
          <div>
            <p>Categoria: {modalList.category}</p>
            <p>Valor: {modalList.value}</p>
            <p>Data: {modalList.date}</p>
            <p>Descrição: {modalList.description}</p>
          </div>
        )}
      </StyledModal>
    </MainContainer>
  );
}

export default SituationList;
