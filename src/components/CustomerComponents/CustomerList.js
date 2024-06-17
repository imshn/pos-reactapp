import React, { useState, useEffect, useContext } from "react";
import { Button, Flex, Table, Typography } from "antd";
import SearchQuery from "../SearchQuery";
import { PlusOutlined } from "@ant-design/icons";
import CreateCustomerModal from "../CustomModals/CreateCustomerModal";
import CustomerContext from "../../context/CustomerContextAPI/CustomerContext";
const { Title, Text } = Typography;

const limit = 10;
const CustomerList = () => {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState();
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setVisible] = useState(false);

  const { setCustomers, customers } = useContext(CustomerContext);

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "firstName",
      key: "name",
      render: (_, record) => (
        <Text>
          {record.firstName} {record.lastName}
        </Text>
      )
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
    }
  ];

  const renderHeader = () => {
    return (
      <Flex gap={5} align="center" justify="space-between">
        <div style={{ marginLeft: 10, width: "40%" }}>
          <Text strong>Search : </Text>
          <SearchQuery placeholder="Search Customer" />
        </div>
        <Button
          type={"primary"}
          style={{ marginRight: 10 }}
          onClick={() => setVisible(true)}
        >
          Add Customer
          <PlusOutlined style={{ color: "#fff !important" }} />
        </Button>
      </Flex>
    );
  };

  const FetchCustomerList = () => {
    // fetch customer list API call
    fetch(`http://dummyjson.com/users?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((response) => {
        setLoading(false);
        setCustomers(response?.users);
        setTotal(response?.total);
      });
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a href>Previous</a>;
    }
    if (type === "next") {
      return <a href>Next</a>;
    }
    return originalElement;
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSkip((page - 1) * limit);
    if (page === 1) {
      setSkip(0);
    }
  };

  useEffect(() => {
    FetchCustomerList();
  }, [skip]);

  return (
    <div>
      <Title>Customers</Title>
      <Table
        loading={loading}
        size={"middle"}
        title={renderHeader}
        dataSource={customers}
        columns={columns}
        bordered
        pagination={{
          total: total,
          pageSize: limit,
          showSizeChanger: false,
          current: currentPage,
          onChange: handlePageChange,
          itemRender: itemRender,
          position: ["bottomCenter"],
          size: "default",
          showTotal: (total, range) =>
            `${range[0]}-${range[1]} of ${total} Customers`
        }}
      />
      <CreateCustomerModal
        handleCancel={() => setVisible(!isVisible)}
        handleOk={() => setVisible(!isVisible)}
        isModalOpen={isVisible}
      />
    </div>
  );
};

export default CustomerList;
