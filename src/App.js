import "./App.css";
import GlobalStyleComposed from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Produtos from "components/pages/Produtos";
import MeLiga from "components/pages/MeLiga";
import Orcamento from "components/pages/Orcamento";
import Navbar from "components/atoms/Navbar";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyleComposed />
      <Router>
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
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
