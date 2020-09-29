import React from "react";
import { Form, Input, Select } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import {
  PageTitle,
  CategoryTitle,
  ValueTitle,
  DataTitle,
  JustifyTitle,
  CategoryInfo,
  FormCategory,
  InputCategory,
  ValueInfo,
  DataInfo,
  JustifyInfo,
  NoButton,
  OkButton,
  PageForm,
  ButtonContainer,
} from "./styled-refound";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 3,
  },
};

const { Option } = Select;

const { TextArea } = Input;

const RefoundRequest = () => {
  return (
    <div>
      <PageForm {...layout} name="nest-messages">
        <PageTitle>Novo Reembolso</PageTitle>

        <CategoryTitle>Categorias</CategoryTitle>

        <FormCategory.Item>
          <InputCategory.Group compact>
            <FormCategory.Item
              name={["Categoria", "tipos"]}
              noStyle
              rules={[{ required: true, message: "Categoria é necessária" }]}
            >
              <CategoryInfo placeholder="Escolha uma categoria">
                <Option value="Transporte">Transporte</Option>
                <Option value="Alimentacao">Alimentação</Option>
                <Option value="Hospedagem">Hospedagem</Option>
                <Option value="Combustivel">Combustível</Option>
                <Option value="Outros">Outros</Option>
              </CategoryInfo>
            </FormCategory.Item>
          </InputCategory.Group>
        </FormCategory.Item>

        <ValueTitle>Valor R$</ValueTitle>
        <Form.Item>
          <ValueInfo
            defaultValue={""}
            formatter={(value) =>
              ` ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            rules={[{ required: true, message: "Valor é necessário" }]}
          />
        </Form.Item>

        <DataTitle>Data</DataTitle>
        <Form.Item rules={[{ required: true, message: "Data é necessária" }]}>
          <DataInfo placeholder="Escolha data" />
        </Form.Item>

        <JustifyTitle>Descrição</JustifyTitle>
        <Form.Item
          name={["user", "introduction"]}
          rules={[{ required: true, message: "Descrição é necessária" }]}
        >
          <JustifyInfo
            placeholder="Descreva a natureza do reembolso"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>

        <ButtonContainer>
          <Form.Item>
            <NoButton type="primary" htmlType="submit">
              <CloseOutlined />
            </NoButton>
          </Form.Item>

          <Form.Item>
            <OkButton type="primary" htmlType="submit">
              <CheckOutlined />
            </OkButton>
          </Form.Item>
        </ButtonContainer>
      </PageForm>
    </div>
  );
};

export default RefoundRequest;
