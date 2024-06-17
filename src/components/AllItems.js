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
  // const [category, setCategory] = useState(props.category)
  const { products, setProducts, setCart, cart, setProductTitles, category } =
    useContext(ProductContext);

  const FetchProductItems = () => {
    let query = !(category == "all")
      ? `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`
      : `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
    fetch(query)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data?.products);
        setTotal(data?.total);
      });
  };

  const ExtractProductTitle = () => {
    let productTitles = [];
    fetch(`https://dummyjson.com/products`)
      .then((res) => res.json())
      .then((data) => {
        data?.products.forEach((product) => {
          productTitles.push({ value: product.title });
        });
      });

    setProductTitles(productTitles);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setSkip((page - 1) * limit);
    if (page == 1) {
      setSkip(0);
    }
  };

  const AddProductToCart = (product) => {
    let productAlreadyInCart = cart.find((item) => item.id === product.id);
    if (!productAlreadyInCart) {
      setCart([...cart, product]);
    } else {
      productAlreadyInCart["qty"] += 1;
      setCart([...cart]);
    }
  };

  const itemRender = (_, type, originalElement) => {
    if (type === "prev") {
      return <a>Previous</a>;
    }
    if (type === "next") {
      return <a>Next</a>;
    }
    return originalElement;
  };

  useEffect(() => {
    FetchProductItems();
    ExtractProductTitle();
  }, [skip, category]);

  return (
    <Row gutter={[16, 32]}>
      {products ? (
        products?.map((product, index) => (
          <Col key={index} span={8}>
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
            itemRender={itemRender}
          />
        </Flex>
      </Col>
    </Row>
  );
};

export default AllItems;

// "https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4="
