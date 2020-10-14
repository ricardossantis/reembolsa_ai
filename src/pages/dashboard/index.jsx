import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api";
import Graph from "../../components/dashboard-components/graph";
import Message from "../../components//dashboard-components/message";
import {
  Content,
  Title,
  ContentContainer,
  Buttons,
  StyledButton,
  StyledGraph,
  MessageContainer,
} from "./dashboard";

function Dashboard() {
  const [renderedGraph, setRenderedGraph] = useState("custo");
  const [buttonClass, setClass] = useState({ button1: true, button2: false });
  const [list, setList] = useState([]);
  const stateAuth = useSelector((state) => state.authentication);
  const id = stateAuth.user.id;
  const token = stateAuth.auth;

  const handleClick = (value) => {
    value === "custo" ? setRenderedGraph("custo") : setRenderedGraph("fluxo");
    value === "custo"
      ? setClass({ button1: true, button2: false })
      : setClass({ button1: false, button2: true });
  };

  useEffect(() => {
    api
      .get("/refunds", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setList(res.data.filter((item) => item.userId === id));
      });
  }, []);

  console.log(list);

  return (
    <Content>
      <Title>Dashboard</Title>
      <ContentContainer>
        <Buttons>
          <StyledButton
            onClick={() => handleClick("custo")}
            className={buttonClass.button1 ? "active" : ""}
          >
            Custo Mensal
          </StyledButton>
          <StyledButton
            onClick={() => handleClick("fluxo")}
            className={buttonClass.button2 ? "active" : ""}
          >
            Fluxo de Pedidos
          </StyledButton>
        </Buttons>
        <StyledGraph>
          {renderedGraph === "custo" ? (
            <Graph type="custo" list={list} />
          ) : (
            <Graph type="fluxo" list={list} />
          )}
        </StyledGraph>

        <MessageContainer>
          {renderedGraph === "custo" ? (
            <Message type="custo" list={list} />
          ) : (
            <Message type="fluxo" list={list} />
          )}
        </MessageContainer>
      </ContentContainer>
    </Content>
  );
}

export default Dashboard;
