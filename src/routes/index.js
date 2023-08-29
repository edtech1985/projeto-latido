import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Main } from "./Routes";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import FAQ from "../pages/FAQ";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Adote from "../pages/Adote";
import Ajudar from "../pages/Ajudar";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adote" element={<Adote />} />
          <Route path="/quero-ajudar" element={<Ajudar />} />
          <Route path="/duvidas" element={<FAQ />} />
          <Route path="/sobre" element={<AboutUs />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </Main>
  );
}
