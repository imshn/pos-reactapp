import "./App.css";
import ProductContextProvider from "./context/ProductContextProvider";
import MainLayout from "./layout/mainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./components/DashboardComponents/Dashboard";
import OrderSection from "./components/OrdersComponents/OrderSection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "",
        element: <OrderSection />
      },
      {
        path: "orders",
        element: <OrderSection />,
        children: [
          {
            path: "create",
            element: <h1>Create Order</h1>
          }
        ]
      },
      {
        path: "/customers",
        element: <h1>Customers</h1>,
        children: [
          {
            path: "add",
            element: <h1>Add Customer</h1>
          }
        ]
      },
      {
        path: "/products",
        children: [
          {
            path: "",
            element: <h1>Product</h1>
          },
          {
            path: "add",
            element: <h1>Add Product</h1>
          },
          {
            path: "stock-management",
            element: <h1>Stock Management</h1>
          }
        ]
      },
      {
        path: "/categories",
        element: <h1>Categories</h1>,
        children: [
          {
            path: "add",
            element: <h1>Add Category</h1>
          }
        ]
      },
      {
        path: "/reports",
        children: [
          {
            path: "today",
            element: <h1>Todays Report</h1>
          },
          {
            path: "sales-reports",
            element: <h1>Sales Report</h1>
          },
          {
            path: "sales-returns",
            element: <h1>Sales Returns</h1>
          },
          {
            path: "stock-reports",
            element: <h1>Stock Report</h1>
          }
        ]
      }
    ]
  }
]);

function App() {
  return (
    <ProductContextProvider>
      <RouterProvider router={router} />
    </ProductContextProvider>
  );
}

export default App;
