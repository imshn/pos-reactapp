import React from "react";
import SearchQuery from "./SearchQuery";
import { Flex, Pagination, Typography } from "antd";
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
const CustomerSearchSection = () => {
  return (
    <div>
      <Title type="bold">Ongoing Orders</Title>
      <SearchQuery placeholder="Search for Foods, drinks, etc..." />
      <Tabs defaultActiveKey="1" items={items} />
      <Flex gap="middle" align="center" justify="center">
        <Pagination
          style={{ margin: "25px auto" }}
          total={100}
          pageSize={50}
          showSizeChanger={false}
          current={1}
        />
      </Flex>
    </div>
  );
};

export default CustomerSearchSection;
