import React, { useEffect } from "react";
import DefaultForm from "../../components/login/default-form/index";
import DefaultFormItem from "../../components/login/default-form-item/index";
import DefaultInput from "../../components/login/default-input/index";
import DefaultH1 from "../../components/login/default-h1/index";
import DefaultLabel from "../../components/login/default-label/index";
import StyledContent from "../../components/login/styled-content/index";
import StyledInputPassword from "../../components/login/styled-input-password/index";
import StyledError from "../../components/login/styled-error/index";
import StyledButton from "../../components/system-general/system-button";
import { CloseCircleFilled, CheckCircleFilled } from "@ant-design/icons";
import { requestLogin } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Button } from "antd";
import "antd/dist/antd.css";
import styled from "styled-components";

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
        <ButtonContainer>
         
          <ButtonBox onClick={() => history.push("/")}>
            <CancelB />
          </ButtonBox>
          <ButtonBox  >
            <ConfirmB />
          </ButtonBox>
        </ButtonContainer>
        {err !== "" && <StyledError>{err}</StyledError>}
      </DefaultForm>
      {console.log(Link)}
    </StyledContent>
  );
};

export default LoginPage;

const ButtonContainer = styled.div`
background-color: #f5f5f5;
display: flex;
justify-content: space-evenly;
align-items: center;
`

//arrumar estes botoes senhor amado
const ButtonBox = styled(Button)`
border: 0;
background-color: #F5F5F5;
font-size: 3rem;
`;
const CancelB = styled(CloseCircleFilled)`
  color: red;
  font-weight: bolder;
  color: #f15454;
`;

const ConfirmB = styled(CheckCircleFilled)`
  font-weight: bolder;
  color: #2cbfd3;
`;
