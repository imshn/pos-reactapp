import React, { useState } from "react";
import CustomerContext from "./CustomerContext";

const CustomerContextProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  return (
    <CustomerContext.Provider
      value={{
        customers,
        setCustomers
      }}
    >
      {children}
    </CustomerContext.Provider>
  );
};

export default CustomerContextProvider;
