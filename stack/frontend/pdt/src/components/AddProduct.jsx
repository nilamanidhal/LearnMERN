import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    desc: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:8000/api/product/add", formData);
      alert("✅ Product added successfully!");
      setFormData({ name: "", price: "", desc: "", category: "" });
    } catch (error) {
      console.error("Failed to add product:", error);
      alert("❌ Error adding product.");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>➕ Add New Product</h2>
      <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={formData.price} onChange={handleChange} required />
      <input type="text" name="desc" placeholder="Description" value={formData.desc} onChange={handleChange} required />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} required />
      <button type="submit">Add Product</button>
    </form>
  );
}

export default AddProduct;
