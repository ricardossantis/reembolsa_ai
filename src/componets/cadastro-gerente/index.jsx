import React from "react";
import { Form, Input, Button } from "antd";
import {Titulo, Container} from './styledCadastro';

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
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };
  
    return (
        <Container>
        <Titulo>Cadastro</Titulo>
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Nome Completo"
          name="nomeCompleto"
          rules={[
            {
              required: true,
              message: 'Digite seu nome completo',
            },
          ]}
        >
          <Input placeholder="Nome Completo"/>
        </Form.Item>
        <Form.Item
          label="Usuário"
          name="usuario"
          rules={[
            {
              required: true,
              message: 'Digite seu nome de usuário',
            },
          ]}
        >
          <Input placeholder="Usuário"/>
        </Form.Item>

        <Form.Item
          label="Empresa"
          name="empresa"
          rules={[
            {
              required: true,
              message: 'Digite o nome da sua empresa',
            },
          ]}
        >
          <Input placeholder="Empresa"/>
        </Form.Item>

        <Form.Item
          label="E-mail"
          name="email"
          rules={[
            {
              required: true,
              message: 'Digite um e-mail válido',
            },
          ]}
        >
          <Input placeholder="E-mail" />
        </Form.Item>
  
        <Form.Item
          label="Senha"
          name="senha"
          rules={[
            {
              required: true,
              message: 'Digite uma senha',
            },
          ]}
        >
          <Input.Password placeholder="Senha"/>
        </Form.Item>

        <Form.Item
          label="Confirme sua senha"
          name="confirmarSenha"
          rules={[
            {
              required: true,
              message: 'Confirme sua senha',
            },
          ]}
        >
          <Input.Password placeholder="Confirmar Senha"/>
        </Form.Item>
  
      </Form>
      </Container>
    );
  };
export default CadastroGerente;
