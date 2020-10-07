import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import api from "../../services/api.js";
import { useSelector } from "react-redux";

const EmployeesHistory = () => {
  const [list, setList] = useState();
  const stateAuth = useSelector((state) => state.authentication);
  const id = stateAuth.user.id
  console.log(id)
  const token = stateAuth.auth;

  useEffect(() => {
    api
      .get("/refunds", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res)
        setList(
          res.data
            .filter((item) => item.userId + 1 === id)
            .map((item) => {
              switch (item.status) {
                case "pending":
                  item.color = "#F9BB1D";
                  break;
                case "approved":
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
    <SituationList
      header="Histórico de Movimentações"
      list={list}
      title
      token={token}
    />
  );
};

export default EmployeesHistory;
