import React, { useState, useEffect} from "react";
import { Form, Input, Button } from "antd";
import { 
  Titulo, 
  Container,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledInputPassword,
  ContainerButtons
} from './styledCadastro';
import api from '../../services/api';
import axios from "axios";

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
      company: "",
      email: "",
      password: "",
      user: "",
      accessLevel:1
    
  })
  
  console.log(manager)

  
    
  const onFinish = (values) => {
    setManager(values)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
      

  
    return (
      
        <Container>
        <Titulo>Cadastro</Titulo>
      <StyledForm
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <StyledLabel>Empresa</StyledLabel>
        <Form.Item
          name="company"
          rules={[
            {
              required: true,
              message: 'Digite o nome da sua empresa',
            },
          ]}
        >
          <StyledInput placeholder="Insira o nome da sua empresa" value={manager.company}/>
        </Form.Item>
        <StyledLabel>E-mail</StyledLabel>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Digite um e-mail válido',
            },
          ]}
        >
          <StyledInput placeholder="Insira seu e-mail" value={manager.email} />
        </Form.Item>
  
        <StyledLabel>Senha</StyledLabel>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'Digite uma senha',
            },
          ]}
        >
          <StyledInputPassword placeholder="Insira sua senha" value={manager.password}/>
        </Form.Item>

        <StyledLabel>Confirme sua senha</StyledLabel>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Confirme sua senha',
            },
          ]}
        >
          <StyledInputPassword placeholder="Confirme sua Senha"/>
          </Form.Item>
          <ContainerButtons>
            <Form.Item {...tailLayout} >
            <Button style={{backgroundColor:"green", border:"none"}} type="primary" htmlType="submit">
              {'>'}
            </Button>
            </Form.Item>
            <Form.Item {...tailLayout} >
            <Button style={{backgroundColor:"red", border:"none"}} type="primary" htmlType="submit">
              {'>'}
            </Button>
            </Form.Item>
          </ContainerButtons>
        
      </StyledForm>
      </Container>
    );
  };
export default CadastroGerente;
