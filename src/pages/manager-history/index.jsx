import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import api from "../../services/api.js";

function History() {
  const [list, setList] = useState();

  useEffect(() => {
    api
      .get("/refunds")
      .then((res) => {
        setList(
          res.data.map((item) => {
            switch (item.status) {
              case "pending":
                item.color = "yellow";
                break;
              case "aproved":
                item.color = "green";
                break;
              default:
                item.color = "red";
                break;
            }
            return item;
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <SituationList header="Histórico de Movimentações" list={list} title />
  );
}

export default History;
