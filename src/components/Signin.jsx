import axios from "axios";
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";
import "../css/Signin.css";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const formdata = new FormData();
      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post(
        "https://victor.alwaysdata.net/api/signin",
        formdata
      );

      let user = response.data.user;

// TEMP FIX: make your account admin
if (user?.username === "thomasmuchunu") {
  user.role = "admin";
}

login(user);

      if (!user) {
        setError("Invalid login credentials");
        setLoading(false);
        return;
      }

      const safeUser = {
        ...user,
        role: user.role || "user",
      };

      // ✅ IMPORTANT FIX: ensure state updates BEFORE navigation
      login(safeUser);

      setLoading(false);

      // small delay ensures context updates before redirect
      setTimeout(() => {
        navigate("/");
      }, 50);

    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Try again.");
      console.log(err);
    }
  };

  return (
    <div className="signin-page">
      <div className="col-md-6 card shadow p-4">

        <h1 className="text-primary">Sign In</h1>

        {loading && <h5 className="text-info">Logging in...</h5>}
        {error && <h5 className="text-danger">{error}</h5>}

        <form onSubmit={handlesubmit}>

          <input
            type="email"
            placeholder="Enter email"
            className="form-control"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            type="password"
            placeholder="Enter password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />

          <input
            type="submit"
            value="Signin"
            className="btn btn-primary w-100"
          />

          <br /><br />

          Don’t have an account?{" "}
          <Link to="/signup">Register</Link>

        </form>

      </div>
    </div>
  );
};

export default Signin;