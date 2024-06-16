import "./App.css";
import ProductContextProvider from "./context/ProductContextProvider";
import MainLayout from "./dashboard/mainLayout";

function App() {
  return (
    <ProductContextProvider>
      <MainLayout />
    </ProductContextProvider>
  );
}

export default App;
