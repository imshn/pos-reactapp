import { Button, Card } from "antd";
import Title from "antd/es/typography/Title";
import React from "react";

const DailySalesCard = (props) => {
  return (
    <Card
      style={props.style}
      title={"Daily Sales"}
      extra={<Button type="primary">View Report</Button>}
    >
      <Title>2</Title>
      {/* <small>Daily Sales</small> */}
    </Card>
  );
};

export default DailySalesCard;
