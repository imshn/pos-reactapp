import React from "react";
import { Button, Card } from "antd";
const ItemCard = (props) => {
  const product = {
    title: props.title,
    price: props.price,
    image: props.image,
    id: props.id,
    qty: 1,
    total: props.price * 1
  };
  return (
    <Card
      style={{ display: "flex", flexDirection: "column", borderRadius: "20px" }}
      cover={
        <img
          src={props.image}
          alt=""
          style={{
            width: "90%",
            margin: "2px auto",
            marginBottom: "0px",
            objectFit: "scale-down !important"
          }}
        />
      }
      bordered
      hoverable
    >
      <Card.Meta
        style={{ textAlign: "center" }}
        title={props.title}
        description={props.description || "$" + props.price}
      />
      <Button
        block
        type="primary"
        style={{ marginTop: 10 }}
        onClick={() => props.onClick(product)}
      >
        Add to List
      </Button>
    </Card>
  );
};

export default ItemCard;
