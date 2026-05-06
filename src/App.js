
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Addproduct from "./components/Addproduct";
import Getproducts from "./components/Getproducts";
import Makepayment from "./components/Makepayments";
import Notfound from "./components/Notfound";
import Navbar from "./components/Navbar";
import Children from "./components/Children";
import Chatbox from "./components/Chatbox";
import Women from "./components/Women";
import Men from "./components/Men";
import Footwear from "./components/Footwear";



function App() {
  return (
    <Router>
       <div className="App">
      <header className="App-header">
        <h2>Welcome to Jovian Uniforms -Elegance in everyday wear</h2>
      </header>
      <Navbar/>
      <Routes>
         <Route path='/' element={<Getproducts />} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/signin' element={<Signin />} />
      <Route path='/addproduct' element={<Addproduct/>} />
      <Route path='/makepayment' element={<Makepayment/>} />
      <Route path="/children" element={<Children />} />
     <Route path='/women' element={<Women/>} />
     <Route path='/men' element={<Men/>} />
     <Route path='/footwear' element={<Footwear/>} />
     <Route path='*' element={<Notfound/>} />
      </Routes>

      <Chatbox />


    </div>
    </Router>
  );
}

export default App;
