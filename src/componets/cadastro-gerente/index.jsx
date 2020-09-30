import React, { useState, useEffect} from "react";
import { Form, Input, Button } from "antd";
import { Titulo, Container, StyledForm } from './styledCadastro';
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
    fullName: "",
    user: "",
    accessLevel: 2,
    company: "",
    roll: "manager",
    amountLimit: "",

  })

 
  

  useEffect(() => {
    axios.post('https://reembolsa-ai-api.herokuapp.com/register', manager)
   .then(response => setManager(response))
   .then(data => console.log(data))
}, [manager]);
    
    const onFinish = (values) => {
  
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

        <Form.Item
          label="Empresa"
          name="company"
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
          name="password"
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
          name="confirmPassword"
          rules={[
            {
              required: true,
              message: 'Confirme sua senha',
            },
          ]}
        >
          <Input.Password placeholder="Confirmar Senha"/>
        </Form.Item>
        <Form.Item {...tailLayout} >
        <Button style={{backgroundColor:'green', borderRadius:'100px', border:'none'}} type="primary" htmlType="submit">
        >
        </Button>
      </Form.Item>
      </StyledForm>
      </Container>
    );
  };
export default CadastroGerente;
