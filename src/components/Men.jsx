import React from "react";
import { useNavigate } from "react-router-dom";

const menClothes = [
  {
    id: 1,
    name: "Tailored Wool Coat",
    price: "2500",
    age: "Men",
    image: "/images/tailored wool coat.jpg"
  },
  {
    id: 2,
    name: "Classic Black Suit",
    price: "4000",
    age: "Men",
    image: "/images/Classic black suit.jpg"
  },
  {
    id: 3,
    name: "Minimal Street Jacket",
    price: "2200",
    age: "Men",
    image: "/images/minimal street jacket.jpg"
  },
  {
    id: 4,
    name: "Luxury Casual Set",
    price: "2800",
    age: "Men",
    image: "/images/Luxury casual set men.jpg"
  },
  {
    id: 5,
    name: "Evening Formal Blazer",
    price: "3200",
    age: "Men",
    image: "/images/evening formal blazer.jpg"
  }
];

function Men() {
  const navigate = useNavigate();

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
      objectFit: "cover",
      marginBottom: "10px"
    },
    name: {
      fontSize: "16px",
      letterSpacing: "1px",
      textTransform: "uppercase",
      margin: "10px 0"
    },
    price: {
      color: "#333",
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

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Men's Collection</h2>

      <div style={styles.grid}>
        {menClothes.map((item) => (
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
                      product_description: "Luxury men's fashion piece",
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

export default Men;