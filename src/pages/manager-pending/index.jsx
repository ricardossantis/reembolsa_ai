import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import api from "../../services/api.js";
import { useSelector } from "react-redux";

function Pending() {
  const [list, setList] = useState();
  const stateAuth = useSelector((state) => state.authentication);
  const id = stateAuth.user.id;
  const token = stateAuth.auth;

  useEffect(() => {
    api
      .get("/refunds", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setList(
          res.data
            .filter((item) => item.userId === id)
            .map((item) => {
              if (item.status === "pending") {
                item.color = "#F2C94C";
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
