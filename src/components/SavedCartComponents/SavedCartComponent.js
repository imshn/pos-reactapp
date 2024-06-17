import React, { useContext, useEffect } from "react";
import ProductContext from "../../context/ProductContextAPI/ProductContext";
import { Table, Typography } from "antd";

const { Title, Text } = Typography;
const SavedCartComponent = () => {
  const { saveCartList } = useContext(ProductContext);
  const columns = [
    {
      title: "Items",
      dataIndex: "title",
      key: "title",
      render: (text) => (
        <Text style={{ display: "block", width: "100%" }}>{text}</Text>
      ),
      ellipsis: true
    },
    {
      title: "Qty",
      dataIndex: "qty",
      key: "qty",
      render: (text, record) => <Text>{text}</Text>
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <strong>${(parseFloat(text) * record.qty).toFixed(2)}</strong>
      )
    }
  ];
  console.log(saveCartList, "saved");
  const dataSource = [];
  const trimSaveCartList = () => {
    saveCartList.forEach((item) => {
      dataSource.push(...item.item);
      console.log([...item.item], "38");
    });
    return dataSource;
  };
  //   console.log(dataSource)
  return (
    <div>
      <Title>Saved Carts</Title>
      <Table
        dataSource={trimSaveCartList()}
        style={{ border: "0 !important", width: "100%" }}
        size="middle"
        columns={columns}
        // pagination={false}
        pagination={{
          pageSize: 10
        }}
        // scroll={{ y: 250 }}
        responsive
      />
    </div>
  );
};

export default SavedCartComponent;
