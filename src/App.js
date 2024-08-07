import "./App.css";
import CustomerContextProvider from "./context/CustomerContextAPI/CustomerContextProvider";
import ProductContextProvider from "./context/ProductContextAPI/ProductContextProvider";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/mainLayout";
// import Dashboard from "./components/DashboardComponents/Dashboard";
import OrderSection from "./components/OrdersComponents/OrderSection";
import CustomerList from "./components/CustomerComponents/CustomerList";
import SavedCartComponent from "./components/SavedCartComponents/SavedCartComponent";
import LoginPage from "./components/auth/Login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />
  },  
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
        element: <CustomerList />,
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
      },
      {
        path: "/saved-cart",
        element: <SavedCartComponent />
      }
    ]
  }
]);

function App() {
  return (
    <CustomerContextProvider>
      <ProductContextProvider>
        <RouterProvider router={router} />
      </ProductContextProvider>
    </CustomerContextProvider>
  );
}

export default App;
