import React from "react";
import SituationList from "../../components/situation-list-page";

let list = [
  { color: "blue", info: "No. Ref 13 | Cat: Combustível" },
  { color: "blue", info: "No. Ref 15 | Cat: Combustível" },
  { color: "blue", info: "No. Ref 13 | Cat: Combustível" },
];

function Employees() {
  return <SituationList header="Histórico de Movimentações" list={list} />;
}

export default Employees;
