import React, { useEffect, useState } from "react";
import SituationList from "../../components/situation-list-page";
import api from "../../services/api.js";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const EmployeesHistory = () => {
  const [list, setList] = useState();
  const stateAuth = useSelector((state) => state.authentication);
  const id = stateAuth.user.userId;
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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.8,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.4,
          },
        },
      }}
    >
      <SituationList
        header="Histórico de Movimentações"
        list={list}
        title
        token={token}
      />
    </motion.div>
  );
};

export default EmployeesHistory;
