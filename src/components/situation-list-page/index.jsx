import React, { useState } from "react";
import styled from "styled-components";
import SituationCard from "../situation-card";
import { Modal } from "antd";

function SituationList({ header, list, title }) {
  const [visible, setVisibility] = useState(false);
  const [modalList, setModalList] = useState({});

  const showModal = (item) => {
    console.log("aqui");
    setModalList(item);
    setVisibility(true);
  };

  const handleOk = (e) => {
    console.log(e);
    setVisibility(false);
  };

  const handleCancel = (e) => {
    console.log(e);
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
                {item.description}
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

const SituationCardContainer = styled.div`
  width: 80%;
  height: 80px;

  :hover {
    cursor: pointer;
    background-color: rgba(54, 80, 131, 0.5);
    border: 1px solid rgba(54, 80, 131, 0.8);
    border-radius: 20px;
  }
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

const StyledModal = styled(Modal)`
  .ant-modal-content {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
