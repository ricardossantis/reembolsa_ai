import React, { useState } from "react";
import { Form, Input, Tooltip, Select, Checkbox, Button } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import api from "../../services/api";

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
      span: 10,
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

  const onFinish = (values) => {
    api
      .post("/register", { ...values, accessLevel: 2 })
      .then(function (response) {
        console.log(response.data);
        console.log(response.status);

        if (response.status === 200) {
          return setStatusResponse(response.status);
        } else if (response.status === 400) {
          setStatusResponse(response.status);
        } else if (response.status === 500) {
          setStatusResponse(response.status);
        }
      });
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
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
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Senha"
        rules={[
          {
            required: true,
            message: "Campo de senha não deve estar em branco.",
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="fullName"
        label={
          <span>
            Nome completo&nbsp;
            <Tooltip title="Qual é o seu nome?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: "Precisamos saber o seu nome completo.",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="user"
        label={
          <span>
            Usuário&nbsp;
            <Tooltip title="Este será seu nome de usuário no sistema.">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: "Por favor, digite seu nome de usuário.",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="company"
        label={
          <span>
            Empresa&nbsp;
            <Tooltip title="Para qual empresa você trabalha?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message:
              "Precisamos saber qual é a empresa para sua alocação em nosso sistema.",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="roll"
        label={
          <span>
            Cargo&nbsp;
            <Tooltip title="What do you want others to call you?">
              <QuestionCircleOutlined />
            </Tooltip>
          </span>
        }
        rules={[
          {
            required: true,
            message: "Digite o seu cargo. Ele é importante!",
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="amountLimit"
        label="Limite de reembolso"
        rules={[
          {
            required: false,
            message: "Você precisa definir o limite para este usuário.",
          },
        ]}
      >
        <Input
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
      {statusResponse === 201 ? (
        <h2 style={{ color: "green" }}>Colaborador cadastrado com sucesso!</h2>
      ) : statusResponse === null ? (
        <h2 style={{ color: "orange" }}>Aguardando cadastro...</h2>
      ) : (
        <h2 style={{ color: "red" }}>Erro no cadastro!</h2>
      )}
    </Form>
  );
};

export default NewUser;
