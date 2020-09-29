import React from "react";
import SituationList from "../../components/situation-list-page";

let list = [
  { color: "red", info: "No. Ref 13 | Cat: Combustível" },
  { color: "green", info: "No. Ref 15 | Cat: Combustível" },
  { color: "yellow", info: "No. Ref 13 | Cat: Combustível" },
];

function History() {
  return <SituationList header="Histórico de Movimentações" list={list} />;
}

export default History;
