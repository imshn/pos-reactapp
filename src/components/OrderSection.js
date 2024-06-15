import React from "react";
import CustomerSearchSection from "./CustomerSearchSection";
import { Col, Row } from "antd";
import CartList from "./CartList";

const OrderSection = () => {
  return (
    <Row gutter={16}>
      <Col span={16}>
        <CustomerSearchSection />
      </Col>
      <Col span={8}>
        <CartList />
      </Col>
    </Row>
  );
};

export default OrderSection;
