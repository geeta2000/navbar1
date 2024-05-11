import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Number from "./components/Number";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Home from "./components/Home";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/number" element={<Number />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/page" element={<Page />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
