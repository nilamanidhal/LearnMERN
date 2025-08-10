import React from "react";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import DeleteProduct from "./components/DeleteProduct";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛒 Product Dashboard</h1>
      <AddProduct />
      <hr />
      <ProductList />
      <hr />
      <DeleteProduct/>
    </div>
  );
}

export default App;
