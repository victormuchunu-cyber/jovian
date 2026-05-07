import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useContext } from 'react';
import { AuthContext } from './AuthContext';

import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Getproducts from "./components/Getproducts";
import Makepayment from "./components/Makepayments";
import Notfound from "./components/Notfound";
import Addproduct from "./components/Addproduct";
import Navbar from "./components/Navbar";
import Children from "./components/Children";
import About from "./components/About";
import Chatbox from "./components/Chatbox";
import Women from "./components/Women";
import Men from "./components/Men";
import Footwear from "./components/Footwear";

function App() {

  const context = useContext(AuthContext);
  const user = context?.user;

  return (
    <Router>
      <div className="App">

        <header className="App-header">
          <h2>Welcome to Jovian Uniforms - Elegance in everyday wear</h2>
        </header>

        <Navbar />

        <Routes>

          {/* PUBLIC */}
          <Route path='/' element={<Getproducts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/makepayment' element={<Makepayment />} />
          <Route path='/children' element={<Children />} />
          <Route path='/about' element={<About />} />
          <Route path='/women' element={<Women />} />
          <Route path='/men' element={<Men />} />
          <Route path='/footwear' element={<Footwear />} />

          {/* 🔒 PROTECTED ADMIN ROUTE (THIS IS THE FIX) */}
          <Route
            path='/addproduct'
            element={
              user?.role === "admin"
                ? <Addproduct />
                : <Navigate to="/" replace />
            }
          />

          {/* 404 */}
          <Route path='*' element={<Notfound />} />

        </Routes>

        <Chatbox />

      </div>
    </Router>
  );
}

export default App;