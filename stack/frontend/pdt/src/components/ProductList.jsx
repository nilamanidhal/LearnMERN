import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/product");
        setProducts(res.data.message); // assuming your controller returns: { message: [...products] }
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>📦 All Products</h2>
      <ul>
        {products.map((item, index) => (
          <li key={index}>
            <strong>{item.name}</strong> - ₹{item.price} <br />
            {item.desc} | <em>{item.category}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
