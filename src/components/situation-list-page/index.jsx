import React, { useState } from "react";
import {
  MainContainer,
  Header,
  SituationContainer,
  SituationCardContainer,
  Title,
  TitleParagraph,
  StyledModal,
  StyledModal2,
} from "./situation.js";
import SituationCard from "../situation-card";

function SituationList({ header, list = [], title }) {
  const [visible, setVisibility] = useState(false);
  const [visible2, setVisibility2] = useState(false);
  const [modalList, setModalList] = useState();
  const [input, setInput] = useState();

  const showModal = (item) => {
    setModalList(item);
    setVisibility(true);
  };

  const showModal2 = () => {
    setVisibility2(true);
  };

  const handleOk = (e) => {
    setVisibility(false);
  };

  const handleCancel = (e) => {
    if (list[0].color !== "#365083") {
      showModal2();
    }
    setVisibility(false);
  };

  const handleOk2 = (e) => {
    console.log(input);
    setVisibility2(false);
  };

  const handleCancel2 = (e) => {
    setVisibility2(false);
  };

  const handleChange = (e) => {
    setInput(e.target.value);
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
                {item.color !== "#365083" ? item.description : item.fullName}
              </SituationCard>
            </SituationCardContainer>
          ))}
      </SituationContainer>
      <StyledModal visible={visible} onOk={handleOk} onCancel={handleCancel}>
        {list.length > 0 &&
          list[0].color !== "#365083" &&
          modalList &&
          modalList.category !== undefined && (
            <div>
              <p>Categoria: {modalList.category}</p>
              <p>Valor: {modalList.value}</p>
              <p>Data: {modalList.date}</p>
              <p>Descrição: {modalList.description}</p>
            </div>
          )}
        {list.length > 0 &&
          list[0].color === "#365083" &&
          modalList &&
          modalList.category === undefined && (
            <div>
              <p>Valor disponível: {modalList.amountLimit}</p>
            </div>
          )}
      </StyledModal>
      <StyledModal2
        visible={visible2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        <p>Descreva o motivo da rejeição:</p>
        <textarea onChange={handleChange} />
      </StyledModal2>
    </MainContainer>
  );
}

export default SituationList;
