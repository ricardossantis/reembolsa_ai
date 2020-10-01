import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import api from "../../services/api.js";
import { useSelector } from "react-redux";

function History() {
  const [list, setList] = useState();
  const stateAuth = useSelector((state) => state.authentication);
  const id = stateAuth.user.id;

  useEffect(() => {
    api
      .get("/refunds")
      .then((res) => {
        setList(
          res.data
            .filter((item) => item.userId === id)
            .map((item) => {
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

  console.log(list);
  return (
    <SituationList header="Histórico de Movimentações" list={list} title />
  );
}

export default History;
