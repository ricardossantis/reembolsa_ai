import React, { useEffect } from "react";
import DefaultForm from "../../components/login/default-form/index";
import DefaultFormItem from "../../components/login/default-form-item/index";
import DefaultInput from "../../components/login/default-input/index";
import DefaultH1 from "../../components/login/default-h1/index";
import DefaultLabel from "../../components/login/default-label/index";
import StyledContent from "../../components/login/styled-content/index";
import StyledInputPassword from "../../components/login/styled-input-password/index";
import StyledError from "../../components/login/styled-error/index";
import { requestLogin } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";
import "antd/dist/antd.css";
import {
  ButtonContainer,
  ZButton,
} from "../../components/system-general/system-button/ant-button/ant-button-style.js";
import { motion } from "framer-motion";

const LoginPage = () => {
  const stateAuth = useSelector((state) => state.authentication);
  const { err } = stateAuth;
  let history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(requestLogin(values));
  };
  useEffect(() => {
    if (stateAuth.user.accessLevel === 1) {
      history.replace("/novocolaborador");
    }
    if (stateAuth.user.accessLevel === 2) {
      history.replace("/novopedido");
    }
  }, [stateAuth]);
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
      <StyledContent>
        <DefaultForm onFinish={onFinish}>
          <DefaultH1>Área de login</DefaultH1>
          <DefaultLabel>E-mail</DefaultLabel>
          <DefaultFormItem
            name="email"
            rules={[
              {
                required: true,
                message: "Por favor insira um e-mail",
              },
              {
                type: "email",
                message: "Insira um e-mail válido",
              },
            ]}
          >
            <DefaultInput />
          </DefaultFormItem>
          <DefaultLabel>Senha</DefaultLabel>
          <DefaultFormItem
            name="password"
            rules={[
              {
                required: true,
                message: "Por favor insira uma senha",
              },
              {
                min: 6,
                message: "Verifique sua senha",
              },
            ]}
          >
            <StyledInputPassword />
          </DefaultFormItem>
          <ButtonContainer style={{ marginTop: 10 }}>
            <ZButton
              onClick={() => history.push("/")}
              shape="circle"
              icon={
                <CloseCircleFilled style={{ color: "#F15454", fontSize: 50 }} />
              }
            />

            <ZButton
              htmlType="submit"
              shape="circle"
              icon={
                <CheckCircleFilled style={{ color: "#2CD3B5", fontSize: 50 }} />
              }
            />
          </ButtonContainer>
          {err !== "" && <StyledError>{err}</StyledError>}
        </DefaultForm>
        {console.log(Link)}
      </StyledContent>
    </motion.div>
  );
};

export default LoginPage;
