import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../../context/ProductContextAPI/ProductContext";
import { Button, Flex, Table, Typography } from "antd";
import ConfirmModal from "../CustomModals/ConfirmModal";

const { Title, Text } = Typography;
const SavedCartComponent = () => {
  const { saveCartList, setCart, cart } = useContext(ProductContext);
  const [retriveConfirmModalOpen, setRetriveConfirmModalOpen] = useState(false);
  const [id, setId] = useState();

  const retriveSaveCartItem = (id) => {
    let saveItemFromSaveList;
    saveCartList?.forEach((saveItem) => {
      saveItemFromSaveList = saveItem?.item?.find((item) => item.id === id);
    });

    let index = saveCartList?.item?.indexOf(saveItemFromSaveList);
    console.log(cart, index, saveItemFromSaveList);
    // saveCartList?.item?.splice(index, 1);
    // setCart([...cart, saveItemFromSaveList]);
    // setRetriveConfirmModalOpen(false);
  };

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
    },
    {
      title: "Actions",
      dataIndex: "id",
      key: "id",
      render: (text, record) => (
        <Flex gap={5}>
          <Button
            type="primary"
            onClick={() => {
              setId(record.id);
              setRetriveConfirmModalOpen(true);
            }}
          >
            Retrive
          </Button>
          <Button type="primary" danger>
            Delete
          </Button>
        </Flex>
      )
    }
  ];
  const dataSource = [];
  const trimSaveCartList = () => {
    saveCartList.forEach((item) => {
      dataSource.push(...item.item);
    });
    return dataSource;
  };

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
      <ConfirmModal
        isModalOpen={retriveConfirmModalOpen}
        handleOk={() => retriveSaveCartItem(id)}
        handleCancel={() =>
          setRetriveConfirmModalOpen(!retriveConfirmModalOpen)
        }
        message={"Are you sure? You want to retrive this item?"}
      />
    </div>
  );
};

export default SavedCartComponent;
