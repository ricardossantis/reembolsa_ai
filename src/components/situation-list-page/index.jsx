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
import { Button, notification, Divider, Space } from 'antd';
import SituationCard from "../situation-card";
import { SuccessMsg } from '../../components/feedback-msg/'
import { openNotification, Context, contextHolder } from '../../components/feedback-msg/notification'
import api from "../../services/api.js";
import { useDispatch } from "react-redux";
import { setEmployeeList, setPendingList } from "../../redux/actions/list";

function SituationList({ header, list = [], title, token, id }) {
  const dispatch = useDispatch();
  const [visible, setVisibility] = useState(false);
  const [visible2, setVisibility2] = useState(false);
  const [modalItem, setModalItem] = useState();
  const [input, setInput] = useState();
  const [responseStatus, setResponseStatus] = useState();
  const [apiAntd, contextHolder] = notification.useNotification();
  const Context = React.createContext({ name: 'Default' });

  const openNotification = (placement) => {  
    apiAntd.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

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
        .then((response) => {
          dispatch(setEmployeeList(token, id));
          setResponseStatus(response.status);
          console.log(responseStatus)
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
                {item.color !== "#365083" ? `Ref: ${item.id} | Cat: ${item.category}` : item.fullName}
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
              <p>Usuário: {modalItem.userName}</p>
              <p>Nº de Referência: {modalItem.id}</p>
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
              <p>Usuário: {modalItem.userName}</p>
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
      {responseStatus === 200 ? <SuccessMsg message='Sucesso!' description='Limite aumentado.'/> : null}
    </MainContainer>
  );
}

export default SituationList;
