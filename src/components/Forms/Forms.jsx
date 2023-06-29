import { Button, Form, Input } from "antd";
import React from "react";
import { useRef } from "react";

const Forms = () => {
  const form = useRef(null);

  const submitHandler = (values) => {
    console.log(values);
    console.log(form);
    form.current.resetFields()
  };

  const initialValues = {
    name: "",
    amount: 1,
    price: 0,
  };

  return (
    <div>
      <Form
        ref={form}
        onFinish={submitHandler}
        initialValues={initialValues}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          name="name"
          label="Product Name:"
          rules={[
            { required: true, message: "Name is required" },
            { min: 3 },
            { max: 50 },
            {pattern: /^[a-z ]+$/, message: 'Number error'}
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="amount" label="Product Amount:">
          <Input />
        </Form.Item>

        <Form.Item name="price" label="Product Price:">
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button htmlType="submit">Save</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Forms;
