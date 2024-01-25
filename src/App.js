import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/CMS/Home/Home";
import Sale from "./Pages/CMS/Sale/Sale";
import Shop from "./Pages/CMS/Shop/Shop";
import Login from "./Pages/AUTH/Login/Login";
import Header from "./Pages/Layout/Header/Header";
import Footer from "./Pages/Layout/Footer/Footer";
import Contact from "./Pages/CMS/Contact/Contact";
import About from "./Pages/CMS/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
