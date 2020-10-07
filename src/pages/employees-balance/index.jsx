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
  const id = stateAuth.user.id - 1;

  const width = useWindowSize().width;

  const token = stateAuth.auth;
  const [resul, setResul] = useState();
  const [value, setValue] = useState([]);

  const [circleColor, setCircleColor] = useState("");
  const colors = {
    red: "#F15454",
    yellow: "#F9BB1D",
    green: "#2CD3B5",
  };

  const showLimit = () => {
    if (amountLimit <= 100) {
      setCircleColor(colors.red);
    } else if (amountLimit <= 300) {
      setCircleColor(colors.yellow);
    } else {
      setCircleColor(colors.green);
    }
  };
  const refundRequest = () => {
    api
      .get("/refunds", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        res.data
          .filter((item) => item.userId === id && item.status === "approved")
          .map((item) => ({ refoundApproved: parseInt(item.value) }));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => console.log(refundRequest), []);
//testar
  setResul(value);
  console.log(resul);

  const amountLimit = useSelector(
    (state) => state.authentication.user.amountLimit
  );

  // console.log(listValues, "lista aqui")

  useEffect(showLimit, []);

  return (
    <>
      {(width > 768 && (
        <Box>
          <Title>Saldo disponível</Title>
          <BoxCircle>
            <Circle color={circleColor}>R$ {amountLimit}</Circle>
          </BoxCircle>
        </Box>
      )) || (
        <Box>
          <MinTitle>Saldo disponível</MinTitle>
          <BoxCircle>
            <MinCircle color={circleColor}>R$ {amountLimit}</MinCircle>
          </BoxCircle>
        </Box>
      )}
    </>
  );
};

export default Saldo;
