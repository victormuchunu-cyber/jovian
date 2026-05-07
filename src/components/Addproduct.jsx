import React, { useState, useContext } from "react";
import axios from "axios";
import Loader from "./Loader";
import Footer from "./Footer";
import { AuthContext } from "../AuthContext";
import { Navigate } from "react-router-dom";
import "../css/Addproducts.css";

const Addproduct = () => {

  const { user } = useContext(AuthContext);

  // ✅ STATES (must be first)
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState(null);
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // 🔒 ADMIN CHECK (AFTER HOOKS)
  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const formdata = new FormData();

      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);
      formdata.append("category", category);

      const response = await axios.post(
        "https://victor.alwaysdata.net/api/add_product",
        formdata
      );

      setSuccess(response.data.message || "Product added successfully");

      // reset
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto(null);
      setCategory("");

    } catch (err) {
      setError("Failed to add product");
    }

    setLoading(false);
  };

  return (
    <div className="addproducts-bg">

      <div className="container add-product-container">
        <div className="row justify-content-center">

          <div className="col-md-6 add-card">

            <h2 className="text-center mb-4">Add New Product</h2>

            {loading && <Loader />}

            {success && <p className="text-success text-center">{success}</p>}
            {error && <p className="text-danger text-center">{error}</p>}

            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Product Name"
                className="form-control input-style"
                value={product_name}
                onChange={(e) => setProductName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="Description"
                className="form-control input-style"
                value={product_description}
                onChange={(e) => setProductDescription(e.target.value)}
                required
              />

              <input
                type="number"
                placeholder="Price"
                className="form-control input-style"
                value={product_cost}
                onChange={(e) => setProductCost(e.target.value)}
                required
              />

              <select
                className="form-control input-style"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select Category</option>
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="footwear">Footwear</option>
                <option value="children">Children</option>
              </select>

              <input
                type="file"
                className="form-control input-style"
                accept="image/*"
                onChange={(e) => setProductPhoto(e.target.files[0])}
                required
              />

              <button className="btn submit-btn w-100">
                Add Product
              </button>

            </form>

          </div>

        </div>

        <Footer />

      </div>

    </div>
  );
};

export default Addproduct;