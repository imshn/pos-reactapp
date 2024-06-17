import { Modal } from "antd";
import React from "react";

const ProductModal = (props) => {
  return (
    <Modal
      title={props.isEdit ? "Edit Product Details" : "Add New Product"}
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      okText="Create"
      cancelText={props.isEdit ? "Discard" : "Cancel"}
      cancelButtonProps={{ danger: true, type: "primary" }}
    >
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Modal>
  );
};

export default ProductModal;
