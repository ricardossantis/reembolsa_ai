import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import api from "../../services/api.js";
import { useSelector } from "react-redux";

function Employees() {
  const [list, setList] = useState();
  const stateAuth = useSelector((state) => state.authentication);
  const id = stateAuth.user.id;
  useEffect(() => {
    api
      .get("/users")
      .then((res) => {
        console.log(res);
        setList(
          res.data
            .filter((item) => item.userId === id)
            .map((item) => {
              item.color = "#365083";
              return item;
            })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return <SituationList header="Histórico de Movimentações" list={list} />;
}

export default Employees;
