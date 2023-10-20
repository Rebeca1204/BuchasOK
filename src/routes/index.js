import React from "react";
import { Routes, Route } from "react-router-dom";
import Produtos from "components/pages/Produtos";
import MeLiga from "components/pages/MeLiga";
import Orcamento from "components/pages/Orcamento";
import Navbar from "components/atoms/Navbar";
import Home from "components/pages/Home";
import Contact from "components/pages/Contact";
import Erro from "components/pages/Erro";

const AppRoutes = () => (
  <Routes>
    <Route
      path="/"
      element={
        <>
          <Navbar />
          <Home />
        </>
      }
    />
    <Route
      path="/produtos"
      element={
        <>
          <Navbar />
          <Produtos />
        </>
      }
    />
    <Route
      path="/contato"
      element={
        <>
          <Navbar />
          <Contact />
        </>
      }
    />
    <Route
      path="/meLigue"
      element={
        <>
          <Navbar />
          <MeLiga />
        </>
      }
    />
    <Route
      path="/orcamento"
      element={
        <>
          <Navbar />
          <Orcamento />
        </>
      }
    />
    <Route
      path="*"
      element={
        <>
          <Navbar />
          <Erro />
        </>
      }
    />
  </Routes>
);

export default AppRoutes;
