import React from "react";
import OrderSearchSection from "./OrderSearchSection";
import { Col, Row } from "antd";
import CartList from "./CartList";

const OrderSection = () => {
  return (
    <Row gutter={12}>
      <Col span={15}>
        <OrderSearchSection />
      </Col>
      <Col span={9}>
        <CartList />
      </Col>
    </Row>
  );
};

export default OrderSection;
