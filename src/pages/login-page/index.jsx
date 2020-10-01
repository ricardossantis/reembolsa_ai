import React from "react";
import DefaultForm from "../../components/default-form/index";
import DefaultFormItem from "../../components/default-form-item/index.jsx";
import DefaultInput from "../../components/default-input/index";
import DefaultH1 from "../../components/defaultH1/index";
import DefaultLabel from "../../components/default-label/index";
import StyledContent from "../../components/styled-content/index";
import StyledInputPassword from "../../components/styled-input-password/index";
import StyledError from "../../components/styled-error/index";
import { resquestLogin } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import "antd/dist/antd.css";

const LoginPage = () => {
  const stateAuth = useSelector((state: any) => state.authentication);
  const { err } = stateAuth;
  const { success } = stateAuth;
  const dispatch = useDispatch();
  const onFinish = (values: any) => {
    dispatch(resquestLogin(values));
    console.log(stateAuth);
  };
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
        <DefaultFormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          {err !== "" && <StyledError>{err}</StyledError>}
          {success !== "" && <DefaultLabel>{success}</DefaultLabel>}
        </DefaultFormItem>
      </DefaultForm>
    </StyledContent>
  );
};

export default LoginPage;
