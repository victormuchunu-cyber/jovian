import React from "react";


const About = () => {
  return (
    <div style={styles.page}>

      <div style={styles.container}>

        <h1 style={styles.title}>JOVIAN</h1>

        <p style={styles.text}>
          Jovian is not just fashion — it is presence, refinement, and quiet confidence.
          We design for those who understand that true style does not shout; it speaks
          with intention.
        </p>

        <p style={styles.text}>
          Every piece is crafted with precision, inspired by modern minimalism and
          timeless elegance. Jovian blends luxury with comfort for a life in motion.
        </p>

        <p style={styles.text}>
          We believe clothing should define identity, not follow trends.
        </p>

        <div style={styles.year}>EST. 2026</div>

      </div>

      {/* Footer */}
      <div style={styles.footer}>
        <p style={styles.footerText}>
          © {new Date().getFullYear()} JOVIAN. All rights reserved.
          
        </p><br />
        <p>Contact us on : +254795663485</p>

        <p style={styles.footerSub}>
          Crafted with precision. Designed for presence.
        </p>
      </div>

    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#eef2f8", // deep black
    color: "#392a07", // cream
    minHeight: "100vh",
    fontFamily: "Georgia, serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  container: {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "80px 20px",
    textAlign: "center",
  },

  title: {
    letterSpacing: "6px",
    fontWeight: "700",
    fontSize: "42px",
    marginBottom: "30px",
  },

  text: {
    fontSize: "18px",
    lineHeight: "1.9",
    color: "#000000",
    marginBottom: "20px",
  },

  year: {
    marginTop: "40px",
    letterSpacing: "4px",
    fontSize: "14px",
    color: "#120e05",
  },

  footer: {
    borderTop: "1px solid #2a2a2a",
    padding: "20px",
    textAlign: "center",
  },

  footerText: {
    fontSize: "13px",
    letterSpacing: "1px",
    margin: 0,
    color: "#291d01",
  },

  footerSub: {
    fontSize: "12px",
    marginTop: "6px",
    color: "#1e0101",
  },
};


export default About;