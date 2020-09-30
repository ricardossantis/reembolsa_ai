import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import api from "../../services/api.js";

function Pending() {
  const [list, setList] = useState();

  useEffect(() => {
    api
      .get("/refunds")
      .then((res) => {
        setList(
          res.data
            .map((item) => {
              if (item.status === "pending") {
                item.color = "yellow";
                return item;
              }
            })
            .filter((item) => item !== undefined)
        );
      })
      .catch((err) => console.log(err));
  }, []);

  return <SituationList header="Pedidos Pendentes" list={list} title />;
}

export default Pending;
