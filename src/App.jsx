import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Contact from "./components/pages/contact/Contact";
import Home from "./components/pages/home/Home";
import Social from "./components/pages/social/Social";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/social" element={<Social />} />
        <Route path="/contact" elment={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
