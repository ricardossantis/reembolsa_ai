import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Form, Input, Button } from "antd";
import {
  ContainerForm,
  Title,
} from "../../components/new-employee/styled-post";
import {SuccessMsg, ErrorMsg, Succeed, ThrowError} from '../../components/feedback-msg/'
import postRequest from "../../components/new-employee/post-resquest";

import { motion } from "framer-motion";

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
    form.resetFields();
  };

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
        {status === 201 ? <SuccessMsg message='Pronto.' description='Novo usuário criado com sucesso!' /> : null}
        {status === 400 ? <ErrorMsg message='Erro!' description='Usuário já está cadastrado na base.'/> : null}
      </ContainerForm>
    </motion.div>
  );
};

export default NewUser;
