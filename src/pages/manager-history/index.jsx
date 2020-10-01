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
                item.color = "#F9BB1D";
                break;
              case "aproved":
                item.color = "#2CD3B5";
                break;
              default:
                item.color = "#F15454";
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
