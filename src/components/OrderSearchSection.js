import React, { useContext, useEffect } from "react";
import SearchQuery from "./SearchQuery";
import { Typography } from "antd";
import { Tabs } from "antd";
import AllItems from "./AllItems";
import ProductContext from "../context/ProductContext";
const { Title } = Typography;

const items = [
  {
    key: "all",
    label: "ALL",
    children: <AllItems />
  }, // [object Object]
  {
    key: 0,
    label: "Beauty",
    children: <AllItems category={"beauty"} />
  }, // [object Object]
  {
    key: 1,
    label: "Fragrances",
    children: <AllItems category={"fragrances"} />
  }, // [object Object]
  {
    key: 2,
    label: "Furniture",
    children: <AllItems category={"furniture"} />
  }, // [object Object]
  {
    key: 3,
    label: "Groceries",
    children: <AllItems category={"groceries"} />
  }, // [object Object]
  {
    key: 4,
    label: "Home Decoration",
    children: <AllItems category={"home-decoration"} />
  }, // [object Object]
  {
    key: 5,
    label: "Kitchen Accessories",
    children: <AllItems category={"kitchen-accessories"} />
  }, // [object Object]
  {
    key: 6,
    label: "Laptops",
    children: <AllItems category={"laptops"} />
  }, // [object Object]
  {
    key: 7,
    label: "Men's Shirts",
    children: <AllItems category={"mens-shirts"} />
  }, // [object Object]
  {
    key: 8,
    label: "Men's Shoes",
    children: <AllItems category={"mens-shoes"} />
  }, // [object Object]
  {
    key: 9,
    label: "Men's Watches",
    children: <AllItems category={"mens-watches"} />
  }, // [object Object]
  {
    key: 10,
    label: "Mobile Accessories",
    children: <AllItems category={"mobile-accessories"} />
  }, // [object Object]
  {
    key: 11,
    label: "Motorcycle",
    children: <AllItems category={"motorcycle"} />
  }, // [object Object]
  {
    key: 12,
    label: "Skin Care",
    children: <AllItems category={"skin-care"} />
  }, // [object Object]
  {
    key: 13,
    label: "Smarthphones",
    children: <AllItems category={"smartphones"} />
  }, // [object Object]
  {
    key: 14,
    label: "Sports Accessories",
    children: <AllItems category={"sports-accessories"} />
  }, // [object Object]
  {
    key: 15,
    label: "Sunglasses",
    children: <AllItems category={"sunglasses"} />
  },
  {
    key: 16,
    label: "Tablets",
    children: <AllItems category={"tablets"} />
  }
];
const OrderSearchSection = () => {
  const { productTitles } = useContext(ProductContext);

  return (
    <div>
      <Title>
        <b>Select Orders</b>
      </Title>
      <SearchQuery
        placeholder="Search for Foods, drinks, etc..."
        options={productTitles}
      />
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
};

export default OrderSearchSection;
