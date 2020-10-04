import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "../../components/system-general/header/hookWindowSize.js";
import {
  Box,
  Title,
  BoxCircle,
  Circle,
  MinTitle,
  MinCircle,
} from "./balance-style.js";

const Saldo = () => {
  const amountLimit = useSelector(
    (state) => state.authentication.user.amountLimit
  );

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

  useEffect(showLimit, []);

  const width = useWindowSize().width;
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
