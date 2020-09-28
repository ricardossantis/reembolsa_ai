import React from "react";
import { Form, Input, Select, Button, DatePicker, InputNumber } from "antd";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 3,
  },
};

const { Option } = Select;

function onChange(value) {
  console.log("changed", value);
}

const RefoundRequest = () => {
  const onFinish = (values) => {
    console.log(values);
  };

  return (
    <div>
      <h1>Novo Reembolso</h1>
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item label="Categoria">
          <Input.Group compact>
            <Form.Item
              name={["Categoria", "tipos"]}
              noStyle
              rules={[{ required: true, message: "Categoria é necessária" }]}
            >
              <Select placeholder="Escolha uma categoria">
                <Option value="Transporte">Transporte</Option>
                <Option value="Alimentacao">Alimentação</Option>
                <Option value="Hospedagem">Hospedagem</Option>
                <Option value="Combustivel">Combustível</Option>
                <Option value="Outros">Outros</Option>
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item>
          <InputNumber
            defaultValue={0}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }
            parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
            onChange={onChange}
          />
        </Form.Item>

        <Form.Item label="Data">
          <DatePicker />
        </Form.Item>

        <Form.Item name={["user", "introduction"]} label="Descrição">
          <Input.TextArea />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Cancelar
          </Button>
          <Button type="primary" htmlType="submit">
            Enviar
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default RefoundRequest;
