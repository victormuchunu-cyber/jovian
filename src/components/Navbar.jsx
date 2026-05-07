import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  // TEMP FIX: treat this username as admin
  const isAdmin = user?.username === "thomasmuchunu";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black px-4 py-3 shadow-sm">

      {/* BRAND */}
      <Link className="navbar-brand fw-bold fs-4" to="/">
        Jovian Wear
      </Link>

      {/* TOGGLER */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#nav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* LINKS */}
      <div className="collapse navbar-collapse justify-content-end" id="nav">
        <ul className="navbar-nav gap-3 text-center">

          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/children">Children</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/women">Women</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/men">Men</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/footwear">Footwear</Link>
          </li>

          {/* ADMIN ONLY (FIXED LOGIC) */}
          {user?.role === "admin" && (
  <Link className="nav-link" to="/addproduct">Add Product</Link>
)}

          {/* AUTH SECTION */}
          {!user ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/signin">Sign In</Link>
              </li>

              <li className="nav-item">
                <Link className="btn btn-outline-light rounded-pill px-3" to="/signup">
                  Sign Up
                </Link>
              </li>
            </>
          ) : (
            <li className="nav-item">
              <button className="btn btn-danger rounded-pill px-3" onClick={handleLogout}>
                Logout
              </button>
            </li>
          )}

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;