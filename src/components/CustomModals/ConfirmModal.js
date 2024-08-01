import { Modal, Typography } from "antd";
import React from "react";
const { Text } = Typography;
const ConfirmModal = (props) => {
  return (
    <Modal
      title={"Alert"}
      open={props.isModalOpen}
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      okText={"Yes"}
      cancelText={"No"}
        // cancelButtonProps={{ danger: true, type: "primary" }}
    >
      <Text>{props.message}</Text>
    </Modal>
  );
};

export default ConfirmModal;
