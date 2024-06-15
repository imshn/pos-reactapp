import React from "react";
import { Button, Card } from "antd";
const ItemCard = (props) => {
  return (
    <Card
      bodyStyle={{ display: "flex", flexDirection: "column" }}
      cover={
        <img
          src={props.image}
          alt=""
          style={{ width: "90%", margin: "2px auto",marginBottom:"0px", objectFit: "scale-down !important" }}
        />
      }
      style={{ borderRadius: "20px" }}
      bordered
      hoverable
    >
      <Card.Meta
        style={{ textAlign: "center" }}
        title={props.title}
        description={props.description}
      />
      <Button type="primary" style={{marginTop:10}}>Add to List</Button>
    </Card>
  );
};

export default ItemCard;
