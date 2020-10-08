import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "../../components/system-general/header/hookWindowSize.js";
import api from "../../services/api.js";

import {
  Box,
  Title,
  BoxCircle,
  Circle,
  MinTitle,
  MinCircle,
} from "../../components/styled-balance/balance-style.js";

const Saldo = () => {
  const stateAuth = useSelector((state) => state.authentication);
  const id = stateAuth.user.userId;
  const width = useWindowSize().width;
  const token = stateAuth.auth;

  const colors = {
    red: "#F15454",
    yellow: "#F9BB1D",
    green: "#2CD3B5",
  };

  const amountLimit = useSelector(
    (state) => state.authentication.user.amountLimit
  );

  const [renderResult, setRenderResult] = useState("");

  useEffect(() => {
    api
      .get("/refunds", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const value = res.data
          .filter((item) => item.userId === id && item.status === "approved")
          .map((item) => ({ refoundApproved: parseInt(item.value) }))
          .reduce((x, y) => x + y.refoundApproved, 0);
        setRenderResult(amountLimit - value);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {(width > 768 && (
        <Box>
          <Title>Saldo disponível</Title>
          <BoxCircle>
            <Circle color="#2CD3B5">R$ {renderResult}</Circle>
          </BoxCircle>
        </Box>
      )) || (
        <Box>
          <MinTitle>Saldo disponível</MinTitle>
          <BoxCircle>
            <MinCircle color="#2CD3B5">R$ {renderResult}</MinCircle>
          </BoxCircle>
        </Box>
      )}
    </>
  );
};

export default Saldo;
