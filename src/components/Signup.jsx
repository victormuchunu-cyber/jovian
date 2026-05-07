import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Signup = () => {
  // Hooks
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate(); // 🔥 navigation hook
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("Please wait as registration is in progress...");
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();

      formdata.append("username", username);
      formdata.append("email", email);
      formdata.append("password", password);
      formdata.append("phone", phone);

      const response = await axios.post(
        "https://victor.alwaysdata.net/api/signup",
        formdata
      );

      setLoading("");
      setSuccess(response.data.message);

      login({
  username,
  email,
  phone
});

      // Clear inputs
      setUsername("");
      setEmail("");
      setPassword("");
      setPhone("");

      // 🔥 Redirect to home / getproducts
      setTimeout(() => {
        navigate("/"); // change to "/getproducts" if that's your route
      }, 1500);

    } catch (error) {
      setLoading("");
      setError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div
      className="row justify-content-center align-items-center"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundColor: "rgba(107, 61, 214, 0.5)",
        backgroundBlendMode: "darken",
      }}
    >
      <div
        className="col-md-6 shadow p-4"
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          border: "1px solid rgba(255,255,255,0.3)",
          color: "white",
        }}
      >
        <h1 className="text-primary">Sign Up</h1>

        {loading && <h5 className="text-warning">{loading}</h5>}
        {success && <h3 className="text-success">{success}</h3>}
        {error && <h4 className="text-danger">{error}</h4>}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter the Username"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />

          <input
            type="email"
            placeholder="Enter the email address"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />

          <input
            type="password"
            placeholder="Enter the password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <input
            type="number"
            placeholder="Enter the Mobile Phone number"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <br />

          <input
            type="submit"
            value="Signup"
            className="btn btn-primary w-100"
          />

          <br /><br />

          Already have an account?{" "}
          <Link to="/signin" style={{ color: "#ffd700" }}>
            Signin
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;