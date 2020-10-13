import React, { useState } from "react";
import { Form } from "antd";
import {
  Cancel,
  Confirm,
} from "../../components/system-general/system-button/button-style";
import {
  Titulo,
  Container,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledInputPassword,
  ContainerButtons,
  StyledButtonRed,
  StyledButtonGreen,
} from "../../components/new-manager";
import api from "../../services/api";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const CadastroGerente = () => {
  const [manager, setManager] = useState({
    email: "",
    password: "",
    company: "",
    accessLevel: 1,
  });

  const handleSubmit = () => {
    api
      .post(`/register`, { ...manager })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo.data);
  };

  const [form] = Form.useForm();
  const onFinish = () => {
    handleSubmit();
    form.resetFields();
  };

  return (
    <Container>
      <Titulo>Cadastro</Titulo>
      <StyledForm
        {...layout}
        form={form}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <StyledLabel style={{ fontSize: 18 }}>Empresa</StyledLabel>
        <Form.Item
          name="company"
          rules={[
            {
              required: true,
              message: "Digite o nome da sua empresa",
            },
          ]}
        >
          <StyledInput
            onChange={({ target: { value } }) =>
              setManager({ ...manager, company: value })
            }
            value={manager.company}
          />
        </Form.Item>
        <StyledLabel style={{ fontSize: 18 }}>E-mail</StyledLabel>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Digite um e-mail válido",
            },
          ]}
        >
          <StyledInput
            onChange={({ target: { value } }) =>
              setManager({ ...manager, email: value })
            }
            value={manager.email}
          />
        </Form.Item>

        <StyledLabel style={{ fontSize: 18 }}>Senha</StyledLabel>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Digite uma senha",
            },
          ]}
        >
          <StyledInputPassword
            onChange={({ target: { value } }) =>
              setManager({ ...manager, password: value })
            }
            value={manager.password}
          />
        </Form.Item>

        <StyledLabel style={{ fontSize: 18 }}>Confirme sua senha</StyledLabel>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Confirme sua senha",
            },
            ({ getFieldValue }) => ({
              validator(rule, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }
                return Promise.reject(
                  "Senha e confirmar senha devem ser iguais"
                );
              },
            }),
          ]}
        >
          <StyledInputPassword
            onChange={({ target: { value } }) =>
              setManager({ ...manager, confirmPassword: value })
            }
            value={manager.confirmPassword}
          />
        </Form.Item>
        <ContainerButtons>
          <Form.Item {...tailLayout}>
            <StyledButtonRed to="/">
              <Cancel />
            </StyledButtonRed>
          </Form.Item>
          <Form.Item {...tailLayout}>
            <StyledButtonGreen type="primary" htmlType="submit">
              <Confirm />
            </StyledButtonGreen>
          </Form.Item>
        </ContainerButtons>
      </StyledForm>
    </Container>
  );
};
export default CadastroGerente;
