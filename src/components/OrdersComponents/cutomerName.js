import { Button, Flex, Input } from "antd";
import React from "react";
import { UserAddOutlined } from "@ant-design/icons";
const CutomerName = () => {
  return (
    <div style={{ margin: "24px 0px" }}>
      <Flex gap={"small"} justify="space-between">
        <Input placeholder="Search Customer..." />
        <Button style={{ padding: 5, margin: 0 }}>
          <UserAddOutlined />
        </Button>
      </Flex>
    </div>
  );
};

export default CutomerName;
