import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [productTitles, setProductTitles] = useState([]);
  const [category, setCategory] = useState("all");
  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        cart,
        setCart,
        productTitles,
        setProductTitles,
        setCategory,
        category
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
