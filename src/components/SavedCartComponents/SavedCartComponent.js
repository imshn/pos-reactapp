import React, { useContext, useEffect } from "react";
import ProductContext from "../../context/ProductContextAPI/ProductContext";
import { Table, Typography } from "antd";

const { Title, Text } = Typography;
const SavedCartComponent = () => {
  const { saveCartList } = useContext(ProductContext);
  const columns = [
    {
      title: "Receipt No",
      dataIndex: "receipt",
      key: "receipt",
      render: (text) => (
        <Text style={{ display: "block", width: "100%" }}>{text}</Text>
      ),
      ellipsis: true
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render: (text, record) => <Text>{text}</Text>
    },
    {
      title: "Total Amount",
      dataIndex: "total",
      key: "toal",
      render: (text, record) => <strong>${text}</strong>
    }
  ];
  //   const columns = [
  //     {
  //       title: "Items",
  //       dataIndex: "title",
  //       key: "title",
  //       render: (text) => (
  //         <Text style={{ display: "block", width: "100%" }}>{text}</Text>
  //       ),
  //       ellipsis: true
  //     },
  //     {
  //       title: "Qty",
  //       dataIndex: "qty",
  //       key: "qty",
  //       render: (text, record) => <Text>{text}</Text>
  //     },
  //     {
  //       title: "Price",
  //       dataIndex: "price",
  //       key: "price",
  //       render: (text, record) => (
  //         <strong>${(parseFloat(text) * record.qty).toFixed(2)}</strong>
  //       )
  //     }
  //   ];
  const itemDetails = [];
  const itemParentList = () => {
    saveCartList.forEach((item) => {
      itemDetails.push(item);
    });
    return itemDetails;
  };
  const expandedRowRender = () => {
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
    const data = [];

    const trimSaveCartList = () => {
      itemDetails.forEach((item) => {
        data.push(...item.item);
      });
      return data;
    };
    return (
      <Table
        columns={columns}
        dataSource={trimSaveCartList()}
        pagination={false}
      />
    );
  };
  console.log(saveCartList);
  return (
    <div>
      <Title>Saved Carts</Title>
      <Table
        dataSource={itemParentList()}
        style={{ border: "0 !important", width: "100%" }}
        size="middle"
        columns={columns}
        expandable={{
          expandedRowRender
        }}
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
