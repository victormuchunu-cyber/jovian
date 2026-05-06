import React from "react";
import { useNavigate } from "react-router-dom";

const womenClothes = [
  {
    id: 1,
    name: "Elegant Trench Coat",
    price: "1800",
    age: "Women",
    image: "/images/elegant trench coat.jpg"
  },
  {
    id: 2,
    name: "Tailored Classic Blazer",
    price: "2200",
    age: "Women",
    image: "/images/tailored classic blazer.jpg"
  },
  {
    id: 3,
    name: "Minimal Wool Coat",
    price: "3500",
    age: "Women",
    image: "/images/minimal wool coat.jpg"
  },
  {
    id: 4,
    name: "Luxury Casual Set",
    price: "2000",
    age: "Women",
    image: "/images/luxury casual set.jpg"
  },
  {
    id: 5,
    name: "Evening Satin Dress",
    price: "5000",
    age: "Women",
    image: "/images/Evening Satin Dress.jpg"
  }
];

function Women() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Women's Collection</h2>

      <div style={styles.grid}>
        {womenClothes.map((item) => (
          <div key={item.id} style={styles.card}>

            <img
              src={item.image}
              alt={item.name}
              style={styles.image}
            />

            <h3 style={styles.name}>{item.name}</h3>
            <p style={styles.price}>Ksh {item.price}</p>

            <button
              style={styles.button}
              onClick={() =>
                navigate("/makepayment", {
                  state: {
                    product: {
                      product_name: item.name,
                      product_description: "Luxury women's fashion piece",
                      product_cost: item.price,
                      product_photo: item.image
                    }
                  }
                })
              }
            >
              Purchase
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "40px",
    backgroundColor: "#f7f5f2",
    fontFamily: "Georgia, serif"
  },
  title: {
    textAlign: "center",
    fontSize: "28px",
    letterSpacing: "3px",
    textTransform: "uppercase",
    marginBottom: "30px",
    color: "#1a1a1a"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "25px"
  },
  card: {
    backgroundColor: "#fff",
    border: "1px solid #e5e5e5",
    padding: "15px",
    textAlign: "center"
  },
  image: {
    width: "100%",
    height: "260px",
    objectFit: "cover"
  },
  name: {
    fontSize: "16px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    margin: "10px 0"
  },
  price: {
    fontWeight: "bold"
  },
  button: {
    marginTop: "10px",
    padding: "10px 15px",
    backgroundColor: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontSize: "12px"
  }
};

export default Women;