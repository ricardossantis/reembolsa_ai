import React from "react";
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
  const width = useWindowSize().width;
  return (
    <>
      {(width > 768 && (
        <Box>
          <Title>Saldo disponível</Title>
          <BoxCircle>
            <Circle>R$1000,00</Circle>
          </BoxCircle>
        </Box>
      )) || (
        <Box>
          <MinTitle>Saldo disponível</MinTitle>
          <BoxCircle>
            <MinCircle>R$1000,00</MinCircle>
          </BoxCircle>
        </Box>
      )}
    </>
  );
};

export default Saldo;
