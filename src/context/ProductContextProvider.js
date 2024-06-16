import React, { useState } from "react";
import ProductContext from "./ProductContext";

const ProductContextProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    return (
        <ProductContext.Provider value={{ products, setProducts, cart, setCart }}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductContextProvider;