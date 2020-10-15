import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import api from "../../services/api.js";
import { motion } from "framer-motion";
import {
  Box,
  Title,
  BoxCircle,
  MinTitle,
  CircleContainer
} from "../../components/styled-balance/balance-style.js";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Saldo = () => {
  const stateAuth = useSelector((state) => state.authentication);
  const id = stateAuth.user.userId;
  const token = stateAuth.auth;

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
      <>
        
          <Box>
            <MinTitle>Saldo disponível</MinTitle>
            <BoxCircle>
              <CircleContainer>
              <CircularProgressbar value={renderResult} maxValue={amountLimit} text={`R$ ${renderResult}`} styles={{
                background: {
                  fill: "#2CD3B5",  
                }}} />
              </CircleContainer>
            </BoxCircle>
          </Box>
        
      </>
    </motion.div>
  );
};

export default Saldo;