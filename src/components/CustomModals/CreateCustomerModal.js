import { Input, Modal, Form } from "antd";
import React from "react";

const CreateCustomerModal = (props) => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Modal
      title="Add New Customer"
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      okText="Create"
      cancelButtonProps={{ danger: true, type: "primary", size: "large" }}
      okButtonProps={{ size: "large" }}
    >
      <Form
        name="customerForm"
        labelCol={{
          span: 5
        }}
        // wrapperCol={{
        //   span: 16
        // }}
        style={{
          maxWidth: 600,
          margin: 20
        }}
        initialValues={{
          remember: true
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="First Name"
          name="firstName"
          rules={[
            {
              required: true,
              message: "Please input your username!"
            }
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Last Name"
          name="lastName"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Phone No"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your password!"
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default CreateCustomerModal;
