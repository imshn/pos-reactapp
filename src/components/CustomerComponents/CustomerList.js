import React from "react";
import { Table, Typography } from "antd";
const { Title } = Typography;
const CustomerList = () => {
  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name"
    },
    {
      title: "Contact No.",
      dataIndex: "phone",
      key: "phone"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    }
  ];
  return (
    <div>
      <Title>Customers</Title>
      <Table columns={columns} />
    </div>
  );
};

export default CustomerList;
