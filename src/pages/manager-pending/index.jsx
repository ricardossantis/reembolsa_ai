import React from "react";
import SituationList from "../../components/situation-list-page";

let list = [
  { color: "yellow", info: "No. Ref 13 | Cat: Combustível" },
  { color: "yellow", info: "No. Ref 15 | Cat: Combustível" },
  { color: "yellow", info: "No. Ref 13 | Cat: Combustível" },
];

function Pending() {
  return <SituationList header="Pedidos Pendentes" list={list} />;
}

export default Pending;
