import React from 'react'


const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#222',
      color: '#fff',
      padding: '40px 0',
      marginTop: '50px'
    },
    heading: {
      marginBottom: '15px'
    },
    input: {
      marginBottom: '10px'
    },
    link: {
      color: '#bbb',
      textDecoration: 'none',
      display: 'block',
      marginBottom: '5px'
    }
  }

  return (
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
    <a href="tel:+254700000000" style={styles.callBtn}>
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
            <a href="#" style={styles.link}>Facebook</a>
            <a href="#" style={styles.link}>Twitter</a>
            <a href="#" style={styles.link}>Instagram</a>
          </div>

        </div>

        <hr style={{ borderColor: '#444' }} />

        <p className="text-center mb-0">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </footer>
  )
}


export default Footer
