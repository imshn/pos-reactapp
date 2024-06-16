import { AutoComplete, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import React from "react";

const SearchQuery = (props) => {
  return (
    <AutoComplete
      style={{ height: 40, width: "60%" }}
      options={props.options}
      placeholder={props.placeholder}
      filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
      }
      suffixIcon={<SearchOutlined style={{ color: "#0000dd", fontSize: "16px"  }} />}
    />
  );
};

export default SearchQuery;
/* <Input
      style={{ padding: 10, width:"60%" }}
      placeholder={props.placeholder}
      prefix={
        <SearchOutlined
          style={{ color: "#0000dd", fontSize: "16px" }}
        />
      }
    /> */
