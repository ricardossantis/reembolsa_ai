import React from "react";
import DefaultForm from "../../components/page-login/default-form/index";
import DefaultFormItem from "../../components/page-login/default-form-item/index";
import DefaultInput from "../../components/page-login/default-input/index";
import DefaultH1 from "../../components/page-login/default-h1/index";
import DefaultLabel from "../../components/page-login/default-label/index";
import StyledContent from "../../components/page-login/styled-content/index";
import StyledInputPassword from "../../components/page-login/styled-input-password/index";
import StyledSuccess from "../../components/page-login/styled-success/index";
import StyledError from "../../components/page-login/styled-error/index";
import { resquestLogin } from "../../redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "antd";
import { Link,useHistory } from "react-router-dom";
import "antd/dist/antd.css";

const LoginPage = () => {
  const stateAuth = useSelector((state) => state.authentication);
  const { err, success } = stateAuth;
  let history = useHistory();
  const dispatch = useDispatch();
  const onFinish = (values) => {
    dispatch(resquestLogin(values));
    if(stateAuth.user["access-level"]===1){
      setTimeout(()=>history.replace("/novocolaborador"),2000)
    }
    else if(stateAuth.user["access-level"]===2){
      setTimeout(()=>history.replace("/novopedido"),2000)
    }
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
        <div>
          <Button style={{margin:"0px 20px"}} type="primary" htmlType="submit">
            Login
          </Button>
          <Link to="/">
            <Button>Voltar</Button>
          </Link>
          {err !== "" && <StyledError>{err}</StyledError>}
          {success !== "" && <StyledSuccess>{success}</StyledSuccess>}
        </div>
      </DefaultForm>
    </StyledContent>
  );
};

export default LoginPage;
