import React from "react";
import SearchQuery from "./SearchQuery";
import { Typography } from "antd";
import { Tabs } from "antd";
import AllItems from "./AllItems";
const { Title } = Typography;

const items = [
  {
    key: "1",
    label: "ALL",
    children: <AllItems />
  }
];
const OrderSearchSection = () => {
  return (
    <div>
      <Title>
        <b>Select Orders</b>
      </Title>
      <SearchQuery placeholder="Search for Foods, drinks, etc..." />
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default OrderSearchSection;
