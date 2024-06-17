import React, { useContext } from "react";
import SearchQuery from "../SearchQuery";
import { Breadcrumb, Typography } from "antd";
import { Tabs } from "antd";
import AllItems from "./AllItems";
import ProductContext from "../../context/ProductContext";
const { Title } = Typography;

const OrderSearchSection = () => {
  const { productTitles, setCategory } = useContext(ProductContext);
  const items = [
    {
      key: "all",
      label: "ALL",
      children: <AllItems />
    }, // [object Object]
    {
      key: "beauty",
      label: "Beauty",
      children: <AllItems />
    }, // [object Object]
    {
      key: "fragrances",
      label: "Fragrances",
      children: <AllItems />
    }, // [object Object]
    {
      key: "furniture",
      label: "Furniture",
      children: <AllItems />
    }, // [object Object]
    {
      key: "groceries",
      label: "Groceries",
      children: <AllItems />
    }, // [object Object]
    {
      key: "home-decoration",
      label: "Home Decoration",
      children: <AllItems />
    }, // [object Object]
    {
      key: "kitchen-accessories",
      label: "Kitchen Accessories",
      children: <AllItems />
    }, // [object Object]
    {
      key: "laptops",
      label: "Laptops",
      children: <AllItems />
    }, // [object Object]
    {
      key: "mens-shirts",
      label: "Men's Shirts",
      children: <AllItems />
    }, // [object Object]
    {
      key: "mens-shoes",
      label: "Men's Shoes",
      children: <AllItems />
    }, // [object Object]
    {
      key: "mens-watches",
      label: "Men's Watches",
      children: <AllItems />
    }, // [object Object]
    {
      key: "mobile-accessories",
      label: "Mobile Accessories",
      children: <AllItems />
    }, // [object Object]
    {
      key: "motorcycle",
      label: "Motorcycle",
      children: <AllItems />
    }, // [object Object]
    {
      key: "skin-care",
      label: "Skin Care",
      children: <AllItems />
    }, // [object Object]
    {
      key: "smartphones",
      label: "Smarthphones",
      children: <AllItems />
    }, // [object Object]
    {
      key: "sports-accessories",
      label: "Sports Accessories",
      children: <AllItems />
    }, // [object Object]
    {
      key: "sunglasses",
      label: "Sunglasses",
      children: <AllItems />
    },
    {
      key: "tablets",
      label: "Tablets",
      children: <AllItems />
    }
  ];
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Orders</Breadcrumb.Item>
        <Breadcrumb.Item>Create</Breadcrumb.Item>
      </Breadcrumb>
      <Title>
        <b>Create Order</b>
      </Title>
      <SearchQuery
        placeholder="Search for Foods, drinks, etc..."
        options={productTitles}
      />
      <Tabs items={items} onChange={setCategory} />
    </div>
  );
};

export default OrderSearchSection;
