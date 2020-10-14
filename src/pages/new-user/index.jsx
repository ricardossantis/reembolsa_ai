import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import {
  ContainerForm,
  Title,
} from "../../components/new-employee/styled-post";
import {SuccessMsg, ErrorMsg} from '../../components/feedback-msg/'
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
  const [status, setStatus] = useState()
  const [form] = Form.useForm();


  const employerState = useSelector((state) => state.authentication);
  const employerId = employerState.user.id;
  const employerName = employerState.user.user;
  const token = employerState.auth;

  const onFinish = (values) => {
    postRequest(token, values, employerId, employerName, setStatus);
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
        <div>
          <Title>
            <h3>E-mail</h3>
          </Title>
          <Input />
        </div>
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
        <div>
          <Title>
            <h3>Senha</h3>
          </Title>
          <Input.Password />
        </div>
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
        <div>
          <Title>
            <h3>Nome completo</h3>
          </Title>
          <Input />
        </div>
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
        <div>
          <Title>
            <h3>Nome de usuário</h3>
          </Title>
          <Input />
        </div>
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
        <div>
          <Title>
            <h3>Cargo</h3>
          </Title>
          <Input />
        </div>
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
        <div>
          <Title>
            <h3>Limite de Reembolso</h3>
          </Title>
          <Input
            style={{
              width: "100%",
            }}
          />
        </div>
      </Form.Item>

      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Cadastrar
        </Button>
      </Form.Item>
      {status === 201 ? <SuccessMsg message='Sucesso!' description='Usuário cadastrado já pode fazer pedidos de reembolso.'/> : null}
      {status === 400 ? <ErrorMsg message='Erro!' description='Verifique se o usuário já foi cadastrado anteriormente e tente novamente.'/>: null}
    </ContainerForm>
  );
};

export default NewUser;
