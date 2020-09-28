import React from "react";
import "./App.css";
import DefaultForm from "./components/default-form";
import DefaultFormItem from "./components/default-form-item";
import DefaultInput from "./components/default-input";
import DefaultH1 from "./components/defaultH1/index";
import DefaultSelect from "./components/default-select/index";
import DefaultLabel from "./components/default-label/index";
import StyledContent from "./components/styled-content/index";
import { Button } from "antd";
import "antd/dist/antd.css";
import StyledInputPassword from "./components/styled-input-password";
const { Option } = DefaultSelect;
function App() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <StyledContent>
      <DefaultForm onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <DefaultH1>Área de login</DefaultH1>
        <DefaultLabel>Gerente ou colaborador</DefaultLabel>
        <DefaultFormItem name="categoria"
          rules={[
            {
              required: true,
              message: "Por favor escolha uma categoria",
            },
          ]}
        >
          <DefaultSelect placeholder="Escolha uma categoria">
            <Option value="gerente">Gerente</Option>
            <Option value="colaborador">Colaborador</Option>
          </DefaultSelect>
        </DefaultFormItem>
        <DefaultLabel>Usuário</DefaultLabel>
        <DefaultFormItem
          name="username"
          rules={[
            {
              required: true,
              message: "Por favor insira um usuário",
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
              min:6,
              message:"Verifique sua senha"
            },
          ]}
        >
          <StyledInputPassword />
        </DefaultFormItem>
        <DefaultFormItem>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </DefaultFormItem>
      </DefaultForm>
    </StyledContent>
  );
}

export default App;
