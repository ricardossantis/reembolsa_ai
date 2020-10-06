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
import api from "../../services/api.js";

function SituationList({ header, list = [], title, token }) {
  const [visible, setVisibility] = useState(false);
  const [visible2, setVisibility2] = useState(false);
  const [modalItem, setModalItem] = useState();
  const [input, setInput] = useState();

  const showModal = (item) => {
    setModalItem(item);
    setVisibility(true);
  };

  const showModal2 = () => {
    setVisibility2(true);
  };

  const handleOk = (e) => {
    if (list[0].color === "#365083") {
      showModal2();
    }
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
    if (list[0].color === "#365083") {
      api.patch(
        `users/${modalItem.id}`,
        { amountLimit: input },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
    }
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
          modalItem &&
          modalItem.category !== undefined && (
            <div>
              <p>Categoria: {modalItem.category}</p>
              <p>Valor: {modalItem.value}</p>
              <p>Data: {modalItem.date}</p>
              <p>Descrição: {modalItem.description}</p>
            </div>
          )}
        {list.length > 0 &&
          list[0].color === "#365083" &&
          modalItem &&
          modalItem.category === undefined && (
            <div>
              <p>Valor disponível: {modalItem.amountLimit}</p>
            </div>
          )}
      </StyledModal>
      <StyledModal2
        visible={visible2}
        onOk={handleOk2}
        onCancel={handleCancel2}
      >
        {list.length > 0 && list[0].color !== "#365083" && (
          <div>
            <p>Descreva o motivo da rejeição:</p>
            <textarea onChange={handleChange} />
          </div>
        )}
        {list.length > 0 && list[0].color === "#365083" && (
          <div>
            <label>Novo valor:</label>
            <input placeholder="Novo valor" onChange={handleChange} />
          </div>
        )}
      </StyledModal2>
    </MainContainer>
  );
}

export default SituationList;
