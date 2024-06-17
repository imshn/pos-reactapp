import { Button, Card, Divider, Flex, Select, Table, Typography } from "antd";
import React, { useContext, useState } from "react";
import CutomerName from "./cutomerName";
import { DeleteOutlined } from "@ant-design/icons";
import ProductContext from "../../context/ProductContextAPI/ProductContext";

const { Text } = Typography;

const CartList = () => {
  const { cart, setCart } = useContext(ProductContext);
  const [discount, setDiscount] = useState("0");

  const increaseQuantity = (id) => {
    let product = cart.find((product) => product.id === id);
    product.qty += 1;
    setCart([...cart]);
  };

  const decreaseQuantity = (id) => {
    let product = cart.find((product) => product.id === id);
    let index = cart.indexOf(product);
    product.qty -= 1;
    if (product.qty < 1) {
      cart.splice(index, 1);
      setCart([...cart]);
    }
    setCart([...cart]);
  };

  const removeProductFromCart = (id) => {
    let product = cart.find((product) => product.id === id);
    let index = cart.indexOf(product);
    if (!(product.qty > 1)) {
      cart.splice(index, 1);
      setCart([...cart]);
    }
    product.qty -= 1;
    setCart([...cart]);
  };

  const columns = [
    {
      title: "Items",
      dataIndex: "title",
      key: "title",
      render: (text) => (
        <Text style={{ display: "block", width: "100%" }}>{text}</Text>
      ),
      ellipsis: true,
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      render: (text, record) => (
        <Flex align="center" gap="small">
          <Button
            size="small"
            type="primary"
            onClick={() => decreaseQuantity(record.id)}
          >
            -
          </Button>
          <p>{text}</p>
          <Button
            size="small"
            type="primary"
            onClick={() => increaseQuantity(record.id)}
          >
            +
          </Button>
        </Flex>
      ),
      width: "100px"
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <strong>${(parseFloat(text) * record.qty).toFixed(2)}</strong>
      ),
      width: "100px"
    },
    {
      title: "",
      key: "id",
      dataIndex: "id",
      render: (_, record) => (
        <Button
          size="large"
          style={{
            color: "#d44f31",
            border: "none"
          }}
          onClick={() => removeProductFromCart(record.id)}
        >
          <DeleteOutlined />
        </Button>
      )
      // width:0px"
    }
  ];

  const getSubTotalPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += parseFloat(item.price) * item.qty;
    });
    return total.toFixed(2);
  };
  return (
    <Card>
      <CutomerName />
      <Table
        dataSource={cart}
        style={{ border: "0 !important", width: "100%" }}
        size="small"
        columns={columns}
        pagination={false}
        scroll={{ y: 250 }}

        // responsive
      />

      <Card style={{ background: "#eee", marginTop: "25%" }} bordered>
        <Flex justify="space-between">
          <Text strong>Sub Total</Text>
          <Text strong>${getSubTotalPrice()}</Text>
        </Flex>
        <Flex justify="space-between" style={{ marginTop: 5 }}>
          <Text strong>Discount</Text>
          <Select value={discount} onChange={setDiscount}>
            <Select.Option value="0">NA</Select.Option>
            <Select.Option value="15">15%</Select.Option>
          </Select>
        </Flex>
        <Divider />
        <Flex justify="space-between" style={{ margin: "20px 0" }}>
          <b>Total Payment</b>
          <b>
            $
            {discount !== "0"
              ? (getSubTotalPrice() - (discount / 100) * getSubTotalPrice()).toFixed(2)
              : getSubTotalPrice()}
          </b>
        </Flex>
        <Flex justify="space-between" gap={10}>
          <Button size="large" block>
            Save
          </Button>
          <Button size="large" block type="primary">
            Pay
          </Button>
        </Flex>
      </Card>
    </Card>
  );
};

export default CartList;
