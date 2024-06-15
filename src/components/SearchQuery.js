import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const SearchQuery = (props) => {
  return (
    <Input
      style={{ padding: 10, width:"60%" }}
      placeholder={props.placeholder}
      prefix={
        <SearchOutlined
          style={{ color: "#0000dd", fontSize: "16px" }}
        />
      }
    />
  );
};

export default SearchQuery;
