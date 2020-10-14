import React from 'react';
import { Alert } from 'antd';

const SuccessMsg = () => {
    return <Alert
      message="Sucesso!"
      description="Usuário cadastrado já pode ser utilizado para fazer novos reembolsos."
      type="success"
      showIcon
    />
}

const ErrorMsg = () => {
    return <Alert
      message="Ooops, deu erro!"
      description="Você precisa verificar se o usuário já não existe na sua lista de usuários."
      type="error"
      showIcon
    />    
}

export {SuccessMsg, ErrorMsg}
  