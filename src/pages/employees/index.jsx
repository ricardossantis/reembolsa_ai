import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import api from "../../services/api.js";

function Employees() {
  const [list, setList] = useState();
  useEffect(() => {
    api
      .get("/users")
      .then((res) => {
        console.log(res);
        setList(
          res.data.map((item) => {
            item.color = "blue";
            return item;
          })
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return <SituationList header="Histórico de Movimentações" list={list} />;
}

export default Employees;
