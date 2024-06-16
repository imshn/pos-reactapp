import { Col, Empty, Flex, Pagination, Row } from "antd";
import React, { useEffect, useState, useContext } from "react";

import ItemCard from "./ItemCard";
import ProductContext from "../context/ProductContext";

const limit = 6;
const AllItems = () => {
  // const [products, setProducts] = useState([]);
  const [total, setTotal] = useState();
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const { products, setProducts, setCart, cart } = useContext(ProductContext);

  const FetchProductItems = () => {
    fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setTotal(data?.total);
      });
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSkip((page - 1) * limit);
    if (page == 1) {
      setSkip(0);
    }
  };

  useEffect(() => {
    FetchProductItems();
  }, [skip]);
  const AddProductToCart = (product) => {
    let productAlreadyInCart = cart.find((item) => item.id === product.id);
    if(!productAlreadyInCart) {
      setCart([...cart, product]);
    }
    else {
      productAlreadyInCart["qty"] += 1
      setCart([...cart ]);
    }
  };
  return (
    <Row gutter={[16, 32]}>
      {products ? (
        products?.map((product, index) => (
          <Col span={8}>
            <ItemCard
              key={index}
              image={product.thumbnail}
              title={product.title}
              price={product.price}
              id={product.id}
              onClick={(response) => AddProductToCart(response)}
            />
          </Col>
        ))
      ) : (
        <Col span={24}>
          <Empty />
        </Col>
      )}
      <Col span={24}>
        <Flex gap="middle" align="center" justify="center">
          <Pagination
            style={{ margin: "25px auto" }}
            total={total}
            pageSize={limit}
            showSizeChanger={false}
            current={currentPage}
            onChange={handlePageChange}
          />
        </Flex>
      </Col>
    </Row>
  );
};

export default AllItems;

// "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
