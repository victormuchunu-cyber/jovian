import React from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../utils/imageHelper";


const shoesData = {
  kids: [
    {
      id: 1,
      name: "Kids Sneakers",
      price: "1200",
      image: "/images/shoes1.jpg "
      

    },
    {
      id: 2,
      name: "Mini Running Shoes",
      price: "1400",
      image: "/images/shoes2.jpg"
    }
  ],
  women: [
    {
      id: 3,
      name: "Elegant Heels",
      price: "2500",
      image: "/images/shoe3.jpg"
    },
    {
      id: 4,
      name: "Luxury Sneakers",
      price: "3000",
      image: "/images/shoe4.jpg"
    }
  ],
  men: [
    {
      id: 5,
      name: "Classic Leather Shoes",
      price: "3500",
      image: "/images/shoe5.jpg"
    },
    {
      id: 6,
      name: "Premium Sneakers",
      price: "2800",
      image: "/images/shoe6.jpg"
    }
  ]
};

function Footwear() {
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
      marginBottom: "20px"
    },
    intro: {
      textAlign: "center",
      marginBottom: "40px",
      color: "#555",
      maxWidth: "600px",
      marginLeft: "auto",
      marginRight: "auto"
    },
    section: {
      marginBottom: "40px"
    },
    sectionTitle: {
      fontSize: "20px",
      marginBottom: "20px",
      textTransform: "uppercase",
      letterSpacing: "2px"
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "20px"
    },
    card: {
      backgroundColor: "#fff",
      border: "1px solid #e5e5e5",
      padding: "10px",
      textAlign: "center"
    },

    name: {
      textTransform: "uppercase",
      fontSize: "14px",
      margin: "10px 0"
    },
    price: {
      fontWeight: "bold"
    },
    button: {
      marginTop: "10px",
      padding: "8px",
      backgroundColor: "black",
      color: "white",
      border: "none",
      cursor: "pointer",
      textTransform: "uppercase",
      fontSize: "12px"
    },
    footer: {
      marginTop: "50px",
      padding: "20px",
      textAlign: "center",
      borderTop: "1px solid #ddd",
      fontSize: "13px",
      color: "#777"
    },
   image: {
  width: "50%",
  height: "250px",
  objectFit: "cover",
  objectPosition: "center",
  borderRadius: "6px"
}, 
  };

  const renderSection = (title, items) => (
    <div style={styles.section}>
      <h3 style={styles.sectionTitle}>{title}</h3>
      <div style={styles.grid}>
        {items.map((item) => (
          <div key={item.id} style={styles.card}>
           <img
  src={getImageUrl(item.image)}
  alt={item.name}
  style={styles.image}
/>
            <h4 style={styles.name}>{item.name}</h4>
            <p style={styles.price}>Ksh {item.price}</p>

            <button
              style={styles.button}
              onClick={() =>
                navigate("/makepayment", {
                  state: {
                    product: {
                      product_name: item.name,
                      product_description: `${title} shoes`,
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

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Footwear Collection</h2>

      {/* Intro */}
      <p style={styles.intro}>
        Discover premium footwear crafted for comfort, style, and durability.
        From playful designs for kids to elegant styles for women and refined
        classics for men — step into quality with every pair.
      </p>

      {renderSection("Kids", shoesData.kids)}
      {renderSection("Women", shoesData.women)}
      {renderSection("Men", shoesData.men)}

      {/* Footer */}
        <footer style={styles.footer}>
      <div className="container">
        <div className="row">
         
          {/* About Us */}
          <div className="col-md-4">
            <h5 style={styles.heading}>About Us</h5>
            <p>
              We are a passionate team dedicated to building modern web applications.
              Our goal is to create seamless user experiences and scalable solutions.
            </p>
          </div>

          {/* Contact Form */}
         <div className="col-md-4">
  <h5 style={styles.heading}>Contact Us</h5>

  <p style={styles.subtext}>
    Got questions? We respond fast.
  </p>

  <div style={styles.card}>
    <div style={styles.row}>📍 Nairobi, Kenya</div>
    <div style={styles.row}>📞 +254 700 000 000</div>
    <div style={styles.row}>💬 WhatsApp: Chat with us</div>
  </div>

  <div style={styles.actions}>
    <a href="tel:+254795663485" style={styles.callBtn}>
      Call Now
    </a>

    <a
      href="https://wa.me/254700000000"
      target="_blank"
      rel="noreferrer"
      style={styles.waBtn}
    >
      WhatsApp
    </a>
  </div>
  
</div>


          {/* Social Media */}
          <div className="col-md-4">
            <h5 style={styles.heading}>Follow Us</h5>
            <a href="#" style={styles.link}>Facebook</a> <br />

            <a href="#" style={styles.link}>Twitter</a> <br />

            <a href="#" style={styles.link}>Instagram</a> <br />
          </div>

        </div>

        <hr style={{ borderColor: '#444' }} />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
    </div>
  );
}

export default Footwear;
