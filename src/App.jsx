import React from "react";
import { BrowserRouter, Routes, Route, IndexRoute } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
