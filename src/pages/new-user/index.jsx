import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Tooltip, Button } from "antd";
import {
  ContainerForm,
  Title,
  InputRadius,
} from "../../components/new-employee/styled-post";
import postRequest from "../../components/new-employee/post-resquest";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 20,
    },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 10,
      offset: 12,
    },
  },
};

const NewUser = () => {
  const [form] = Form.useForm();
  const [statusResponse, setStatusResponse] = useState(null);

  const employerState = useSelector((state) => state.authentication);
  const employerId = employerState.user.id;
  const employerName = employerState.user.user;

  console.log(
    `Token ativo da sessão: Empresa: ${employerName}, id: ${employerId}`
  );

  const onFinish = (values) => {
    postRequest(values, employerId, employerName, setStatusResponse);
  };

  return (
    <ContainerForm
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Title>
        <h1>Novo Colaborador</h1>
      </Title>

      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "Formato de e-mail inválido!",
          },
          {
            required: true,
            message: "Campo de e-mail não pode estar em branco.",
          },
        ]}
      >
        <Title>
          <h3>E-mail</h3>
        </Title>
        <InputRadius />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Campo de senha não deve estar em branco.",
          },
        ]}
        hasFeedback
      >
        <Title>
          <h3>Senha</h3>
        </Title>
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="fullName"
        rules={[
          {
            required: true,
            message: "Precisamos saber o seu nome completo.",
            whitespace: true,
          },
        ]}
      >
        <Title>
          <h3>Nome completo</h3>
        </Title>
        <InputRadius />
      </Form.Item>

      <Form.Item
        name="user"
        rules={[
          {
            required: true,
            message: "Por favor, digite seu nome de usuário.",
            whitespace: true,
          },
        ]}
      >
        <Title>
          <h3>Nome de usuário</h3>
        </Title>
        <InputRadius />
      </Form.Item>

      <Form.Item
        name="roll"
        rules={[
          {
            required: true,
            message: "Digite o seu cargo. Ele é importante!",
            whitespace: true,
          },
        ]}
      >
        <Title>
          <h3>Cargo</h3>
        </Title>
        <InputRadius />
      </Form.Item>

      <Form.Item
        name="amountLimit"
        rules={[
          {
            required: false,
            message: "Você precisa definir o limite para este usuário.",
          },
        ]}
      >
        <Title>
          <h3>Limite de Reembolso</h3>
        </Title>
        <InputRadius
          style={{
            width: "100%",
          }}
        />
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </ContainerForm>
  );
};

export default NewUser;
