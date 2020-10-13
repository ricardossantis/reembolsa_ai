import React, { useState } from "react";
import Graph from "../../components/dashboard-components/graph";
import {
  Content,
  Title,
  Buttons,
  StyledButton,
  StyledGraph,
  Message,
} from "./dashboard";

function Dashboard() {
  const [renderedGraph, setRenderedGraph] = useState("custo");
  const [buttonClass, setClass] = useState({ button1: true, button2: false });

  const handleClick = (value) => {
    value === "custo" ? setRenderedGraph("custo") : setRenderedGraph("fluxo");
    value === "custo"
      ? setClass({ button1: true, button2: false })
      : setClass({ button1: false, button2: true });
  };

  return (
    <Content>
      <Title>Dashboard</Title>
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
          <Graph title="Custo Mensal" />
        ) : (
          <Graph title="Fluxo de Pedidos" />
        )}
      </StyledGraph>

      <Message></Message>
    </Content>
  );
}

export default Dashboard;
