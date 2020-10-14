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
  ChangeButton,
  ConfirmButton,
} from "./situation.js";
import {ContentContainer, ButtonContainer} from '../system-general/modal-buttons/styles';
import ModalButtons from '../system-general/modal-buttons/';
import AproveButtons from '../system-general/aprove-buttons';
import SituationCard from "../situation-card";
import api from "../../services/api.js";
import { useDispatch } from "react-redux";
import { setEmployeeList, setPendingList } from "../../redux/actions/list";
import Modal from "antd/lib/modal/Modal";

function SituationList({ header, list = [], title, token, id }) {
  const dispatch = useDispatch();
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
    if (header === "Pedidos Pendentes") {
      api
        .patch(
          `refunds/${modalItem.id}`,
          { status: "approved" },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          dispatch(setPendingList(token, id));
        });
    }
    setVisibility(false);
  };

  const handleCancel = (e) => {
    showModal2();
    setVisibility(false);
  };

  const handleXClick = (e) => {
    setVisibility(false);
  };

  const handleOk2 = (e) => {
    if (list[0].color === "#365083") {
      api
        .patch(
          `users/${modalItem.id}`,
          { amountLimit: input },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          dispatch(setEmployeeList(token, id));
        });
    }
    if (header === "Pedidos Pendentes") {
      api
        .patch(
          `refunds/${modalItem.id}`,
          { status: "reproved" },
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          dispatch(setPendingList(token, id));
        });
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
      <StyledModal visible={visible} footer={null} onCancel={handleXClick}>
        {list.length > 0 &&
          list[0].color !== "#365083" &&
          header !== "Pedidos Pendentes" &&
          modalItem &&
          modalItem.category !== undefined && (
            <div>
              <p>Categoria: {modalItem.category}</p>
              <p>Valor: {modalItem.value}</p>
              <p>Data: {modalItem.date}</p>
              <p>Descrição: {modalItem.description}</p>
              <ConfirmButton onClick={handleOk} />
            </div>
          )}
        {list.length > 0 &&
          list[0].color !== "#365083" &&
          header === "Pedidos Pendentes" &&
          modalItem &&
          modalItem.category !== undefined && (
            <ContentContainer>
              <p>Categoria: {modalItem.category}</p>
              <p>Valor: {modalItem.value}</p>
              <p>Data: {modalItem.date}</p>
              <p>Descrição: {modalItem.description}</p>
              <ButtonContainer>
                <ModalButtons name={"Reprovar"} onClick={handleCancel} />
                <ModalButtons name={"Aprovar"} onClick={handleOk} />
              </ButtonContainer>
            </ContentContainer>
          )}
        {list.length > 0 &&
          list[0].color === "#365083" &&
          modalItem &&
          modalItem.category === undefined && (
           
              <ContentContainer>
              <p>Valor disponível: {modalItem.amountLimit}</p>
              <ButtonContainer>
                <ModalButtons name={"Alterar"} onClick={handleCancel} />
                <ModalButtons name={"Ok"} onClick={handleOk} />
              </ButtonContainer>
              </ContentContainer>
          )}
      </StyledModal>
      <StyledModal2 visible={visible2} footer={null} onCancel={handleCancel2}>
        {list.length > 0 && list[0].color !== "#365083" && (
          <ContentContainer>
            <p>Descreva o motivo da rejeição:</p>
            <textarea onChange={handleChange} />
            <ModalButtons name={"Enviar"} onClick={handleOk2} />
          </ContentContainer>
        )}
        {list.length > 0 && list[0].color === "#365083" && (
          <ContentContainer>
            <label>Novo valor:</label>
            <input placeholder="Novo valor" onChange={handleChange} />
            <ModalButtons name={"Alterar"} onClick={handleOk2} />
          </ContentContainer>
        )}
      </StyledModal2>
    </MainContainer>
  );
}

export default SituationList;
