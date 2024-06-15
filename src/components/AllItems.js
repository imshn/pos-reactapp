import { Col, Row } from "antd";
import React from "react";
import ItemCard from "./ItemCard";

const AllItems = () => {
  return (
    <Row gutter={[16, 32]}>
      <Col span={6}>
        <ItemCard
          image={
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
          }
          title={"Cheese Hamburger"}
          description={"$4.99"}
        />
      </Col>
      <Col span={6}>
        <ItemCard
          image={
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
          }
          title={"Cheese Hamburger"}
          description={"$4.99"}
        />
      </Col>
      <Col span={6}>
        <ItemCard
          image={
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
          }
          title={"Cheese Hamburger"}
          description={"$4.99"}
        />
      </Col>
      <Col span={6}>
        <ItemCard
          image={
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
          }
          title={"Cheese Hamburger"}
          description={"$4.99"}
        />
      </Col>
      <Col span={6}>
        <ItemCard
          image={
            "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
          }
          title={"Cheese Hamburger"}
          description={"$4.99"}
        />
      </Col>
    </Row>
  );
};

export default AllItems;
