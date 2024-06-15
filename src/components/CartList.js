import { Button, Card, Flex, Table } from "antd";
import React from "react";
import CutomerName from "./cutomerName";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
const dataSource = [
  {
    key: "1",
    item: "Cheese Hamburger",
    qty: 2,
    price: "$2.99"
  },
  {
    key: "2",
    item: "Cheese Hamburger",
    qty: 5,
    price: "$2.99"
  },
  {
    key: "3",
    item: "Cheese Hamburger",
    qty: 1,
    price: "$2.99"
  },
  {
    key: "4",
    item: "Cheese Hamburger",
    qty: 2,
    price: "$2.99"
  }
];
const columns = [
  {
    title: "Items",
    dataIndex: "item",
    key: "items"
  },
  {
    title: "Qty",
    dataIndex: "qty",
    key: "qty",
    render: (text) => (
      <Flex align="center" gap="small">
        <Button size="small" type="primary">
          -
        </Button>
        <p>{text}</p>
        <Button size="small" type="primary">
          +
        </Button>
      </Flex>
    )
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    render: (text) => <strong>{text}</strong>

  },
  {
    title: "",
    key: "action",
    render: (_, record) => (
      <Button
        size="small"
        style={{
          color: "#d44f31",
          border: "none"
        }}
      >
        <DeleteOutlined />
      </Button>
    )
  }
];
const CartList = () => {
  return (
    <Card style={{ height: "100%" }}>
      <CutomerName />
      <Table
        dataSource={dataSource}
        style={{ border: "0 !important" }}
        size="small"
        columns={columns}
        pagination={false}
      />
    </Card>
  );
};

export default CartList;
