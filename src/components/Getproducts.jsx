import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Mycarousel from "./Mycarousel";
import { getImageUrl } from "../utils/imageHelper";

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const extraProducts = [
    {
      product_name: "Elegant Baby Girl Dress",
      product_description: "Soft floral cotton dress perfect for birthdays and outings.",
      product_cost: 1800,
      product_photo: "/images/Elegant Baby Girl Dress.jpg",
      gender: "Girls",
      age: "1-3 yrs",
    },
    {
      product_name: "Classic Boys Denim Jacket",
      product_description: "Stylish denim jacket for a bold casual look.",
      product_cost: 2200,
      product_photo: "/images/boysdenim.jpg",
      gender: "Boys",
      age: "4-8 yrs",
    },
    {
      product_name: "Unisex Hoodie Set",
      product_description: "Comfortable hoodie set suitable for all seasons.",
      product_cost: 2500,
      product_photo: "/images/Unisex Hoodie Set.jpg",
      gender: "Unisex",
      age: "10-16 yrs",
    },
    {
      product_name: "Kids Summer Shorts Combo",
      product_description: "Lightweight breathable shorts for hot weather days.",
      product_cost: 1200,
      product_photo:"/images/Kids Summer Shorts Combo.jpg",
      gender: "Unisex",
      age: "3-10 yrs",
    },
    {
      product_name: "Premium Teen Streetwear Set",
      product_description: "Trendy streetwear outfit designed for modern teens.",
      product_cost: 3200,
      product_photo: "/images/Premium Teen Streetwear Set.jpg",
      gender: "Teen Boys/Girls",
      age: "13-18 yrs",
    },
  ];

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://victor.alwaysdata.net/api/get_products"
      );

      const apiProducts = response.data || [];

      // Merge API + extras for richer UI
      setProducts([...apiProducts, ...extraProducts]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);

      // fallback even if API fails
      setProducts(extraProducts);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container py-4">
      <h1 className="text-center text-primary fw-bold mb-3">
        ✨ Stylish Outfit Collection
      </h1>

      <p className="text-center text-muted mb-4">
        Trendy, affordable and comfortable fashion for all ages
      </p>

      <Mycarousel />

      {loading && <Loader />}
      {error && <h5 className="text-danger text-center">{error}</h5>}

      <div className="row mt-4">
        {products.map((product, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card border-0 shadow-sm h-100 product-card">

              <img
                src={getImageUrl(product.product_photo)}
                alt={product.product_name}
                className="card-img-top product-img"
              />

              <div className="card-body d-flex flex-column">
                <h6 className="fw-bold text-dark">{product.product_name}</h6>

                <div className="mb-2">
                  <span className="badge bg-info me-1">
                    {product.gender || "Unisex"}
                  </span>
                  <span className="badge bg-secondary">
                    {product.age || "All ages"}
                  </span>
                </div>

                <p className="text-muted small">
                  {product.product_description?.slice(0, 70)}...
                </p>

                <h5 className="text-warning fw-bold">
                  Ksh {product.product_cost}
                </h5>

                <button
                  className="btn btn-outline-primary mt-auto w-100"
                  onClick={() =>
                    navigate("/makepayment", { state: { product } })
                  }
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Getproducts;