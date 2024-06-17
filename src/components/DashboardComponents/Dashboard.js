import React from "react";
import { Col, Flex, Row, Typography } from "antd";
import DailySalesCard from "./DailySalesCard";
const { Title } = Typography;
const Dashboard = () => {
  return (
    <div>
      <Title>Dashboard</Title>
      <Row gutter={[32, 32]}>
        <Col span={10}>
          <DailySalesCard style={{ height: "100%" }} />
        </Col>
        <Col span={7}>
          <DailySalesCard style={{ height: "100%" }} />
        </Col>
        <Col span={7}>
          <Flex vertical gap={32}>
            <DailySalesCard />
            <DailySalesCard />
          </Flex>
        </Col>
        <Col span={24}>
          <DailySalesCard />
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
