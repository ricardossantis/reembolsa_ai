import React, { useState, useEffect } from "react";
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
import SituationCard from "../situation-card";
import api from "../../services/api.js";
import { useDispatch } from "react-redux";
import { setEmployeeList, setPendingList } from "../../redux/actions/list";

function SituationList({ header, list = [], title, token, id }) {
  const dispatch = useDispatch();
  const [visible, setVisibility] = useState(false);
  const [visible2, setVisibility2] = useState(false);
  const [modalItem, setModalItem] = useState();
  const [input, setInput] = useState();
  const [update, setUpdate] = useState();

  useEffect(() => {
    if (header === "Pedidos Pendentes") {
      dispatch(setPendingList(token, id));
    } else {
      dispatch(setEmployeeList(token, id));
    }
  }, [update]);

  const showModal = (item) => {
    setModalItem(item);
    setVisibility(true);
  };

  const showModal2 = () => {
    setVisibility2(true);
  };

  const handleOk = (e) => {
    if (header === "Pedidos Pendentes") {
      api.patch(
        `refunds/${modalItem.id}`,
        { status: "approved" },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setUpdate([]);
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
      api.patch(
        `users/${modalItem.id}`,
        { amountLimit: input },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setUpdate([]);
    }
    if (header === "Pedidos Pendentes") {
      api.patch(
        `refunds/${modalItem.id}`,
        { status: "reproved" },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      );
      setUpdate([]);
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
            <div>
              <p>Categoria: {modalItem.category}</p>
              <p>Valor: {modalItem.value}</p>
              <p>Data: {modalItem.date}</p>
              <p>Descrição: {modalItem.description}</p>
              <ChangeButton onClick={handleCancel} />
              <ConfirmButton onClick={handleOk} />
            </div>
          )}
        {list.length > 0 &&
          list[0].color === "#365083" &&
          modalItem &&
          modalItem.category === undefined && (
            <div>
              <p>Valor disponível: {modalItem.amountLimit}</p>
              <ChangeButton onClick={handleCancel} />
              <ConfirmButton onClick={handleOk} />
            </div>
          )}
      </StyledModal>
      <StyledModal2 visible={visible2} footer={null} onCancel={handleCancel2}>
        {list.length > 0 && list[0].color !== "#365083" && (
          <div>
            <p>Descreva o motivo da rejeição:</p>
            <textarea onChange={handleChange} />
            <ConfirmButton onClick={handleOk2} />
          </div>
        )}
        {list.length > 0 && list[0].color === "#365083" && (
          <div>
            <label>Novo valor:</label>
            <input placeholder="Novo valor" onChange={handleChange} />
            <ConfirmButton onClick={handleOk2} />
          </div>
        )}
      </StyledModal2>
    </MainContainer>
  );
}

export default SituationList;
