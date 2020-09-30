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
    email: "",
    password: "",
    confirmPassword: "",
    accessLevel: 2,
    company: "",
  })
  
  console.log(manager)

  const handleSubmit = (values) => {
      axios.post(`https://reembolsa-ai-api.herokuapp.com/register`, manager)
      .then(res => setManager(res))
      .catch(error => console.log(error))
  }
    
  const onFinish = (values) => {
    handleSubmit(values)
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
<<<<<<< HEAD
        <StyledLabel>Empresa</StyledLabel>
        <Form.Item
=======

        <Form.Item
          label="Empresa"
>>>>>>> 2f9e8c61816a84b9f64d2eeba080b916d06a7dff
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
<<<<<<< HEAD
=======
          label="Senha"
>>>>>>> 2f9e8c61816a84b9f64d2eeba080b916d06a7dff
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
<<<<<<< HEAD
=======
          label="Confirme sua senha"
>>>>>>> 2f9e8c61816a84b9f64d2eeba080b916d06a7dff
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Confirme sua senha',
            },
          ]}
        >
<<<<<<< HEAD
          <StyledInputPassword placeholder="Confirme sua Senha"/>
          </Form.Item>
          <ContainerButtons>
            <Form.Item {...tailLayout} >
            <Button style={{backgroundColor:"green", border:"none"}} type="primary" htmlType="submit">
              >
            </Button>
            </Form.Item>
          </ContainerButtons>
        
=======
          <Input.Password placeholder="Confirmar Senha"/>
        </Form.Item>
        <Form.Item {...tailLayout} >
        <Button style={{backgroundColor:'green', borderRadius:'100px', border:'none'}} type="primary" htmlType="submit">
        >
        </Button>
      </Form.Item>
>>>>>>> 2f9e8c61816a84b9f64d2eeba080b916d06a7dff
      </StyledForm>
      </Container>
    );
  };
export default CadastroGerente;
