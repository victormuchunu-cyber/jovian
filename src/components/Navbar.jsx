import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthContext'

const Navbar = () => {

  const { user, logout } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/signin")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-3 shadow-sm custom-navbar">

      {/* Brand */}
      <Link className="navbar-brand fw-bold fs-4 brand-text" to="/">
        <img
          src="images/Jovian logo.avif"
          alt="logo"
          height="40px"
          width={"40px"}
        />
        Jovian Wear
      </Link>

      {/* Toggle (mobile) */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Links */}
      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">

        <ul className="navbar-nav gap-3 text-center">

          <li className="nav-item">
            <Link className="nav-link nav-animated" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link nav-animated" to="/addproduct">
              Add Product
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link nav-animated" to="/children">
              Children
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link nav-animated" to="/women">
              Women
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link nav-animated" to="/men">
              Men
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link nav-animated" to="/footwear">
              Footwear
            </Link>
          </li>

          {!user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link nav-animated" to="/signin">
                  Sign In
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="btn btn-outline-light rounded-pill px-3 signup-btn"
                  to="/signup"
                >
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button
                className="btn btn-danger rounded-pill px-3"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}

        </ul>
      </div>

    </nav>
  )
}

export default Navbar