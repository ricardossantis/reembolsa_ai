import React from "react";
import { useSelector } from "react-redux";
import { Form, Input } from "antd";
import {
  ContainerForm,
  Title,
  FormBox,
  LButton,
} from "../../components/new-employee/styled-post";
import postRequest from "../../components/new-employee/post-resquest";
import { CheckCircleFilled } from "@ant-design/icons";
import { ZButton } from "../../components/system-general/system-button/ant-button/ant-button-style.js";

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

const NewUser = () => {
  const [form] = Form.useForm();

  const employerState = useSelector((state) => state.authentication);
  const employerId = employerState.user.id;
  const employerName = employerState.user.user;
  const token = employerState.auth;

  const onFinish = (values) => {
    postRequest(token, values, employerId, employerName);
  };

  return (
    <FormBox>
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
              message: "Formato de e-mail inválido.",
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
              message: "Digite o nome do colaborador.",
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
              message: "Digite o usuário do colaborador.",
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
              message: "Digite o cargo do colaborador.",
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
              required: true,
              message: "Definir o limite para este usuário.",
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
        <LButton>
          <ZButton
            htmlType="submit"
            shape="circle"
            icon={
              <CheckCircleFilled style={{ color: "#2CD3B5", fontSize: 50 }} />
            }
          />
        </LButton>
      </ContainerForm>
    </FormBox>
  );
};

export default NewUser;
