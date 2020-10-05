import React, { useState, useEffect} from "react";
import { Form, Input, Button } from "antd";
import {Link} from 'react-router-dom';
import {BiUpArrow, BiDownArrow} from 'react-icons/bi'
import { 
  Titulo, 
  Container,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledInputPassword,
  ContainerButtons,
  StyledButtonRed,
  StyledButtonGreen
} from './styledCadastro';
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
      company: "" ,
      email: "",
      password: "",
      confirmPassword: "",
      accessLevel:1
    
  })
  
  console.log(manager)

 const  handleSubmit = () => {
      api.post(`/register`, {manager})
      .then(res => console.log(res.data))
      .catch(error => console.log(error.res))
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo.data);
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
          <StyledInput onChange={({target: {value}}) =>
        setManager({...manager, company: value})}  placeholder="Insira o nome da sua empresa" value={manager.company}/>
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
          <StyledInput onChange={({target: {value}}) =>
        setManager({...manager, email: value})} placeholder="Insira seu e-mail" value={manager.email} />
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
          <StyledInputPassword  onChange={({target: {value}}) =>
        setManager({...manager, password: value})} placeholder="Insira sua senha" value={manager.password}/>
        </Form.Item>

        <StyledLabel>Confirme sua senha</StyledLabel>
        <Form.Item
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: "Confirme sua senha",
            },
            ({ getFieldValue }) => ({
              validator( rule, value) {
                rule = rule;
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
          <StyledInputPassword onChange={({target: {value}}) =>
        setManager({...manager, confirmPassword: value})} placeholder="Insira sua senha" value={manager.confirmPassword} placeholder="Confirme sua Senha"/>
          </Form.Item>
          <ContainerButtons>
            <Form.Item {...tailLayout} >
            <StyledButtonRed to="/" >
              <BiDownArrow/>
            </StyledButtonRed>
            </Form.Item>
            <Form.Item {...tailLayout} >
            <StyledButtonGreen type="primary" htmlType="submit">
              <BiUpArrow/>
            </StyledButtonGreen>
            </Form.Item>
          </ContainerButtons>
        
      </StyledForm>
      </Container>
    );
  };
export default CadastroGerente;
