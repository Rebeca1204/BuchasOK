import "./App.css";
import GlobalStyleComposed from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Produtos from "components/pages/Produtos";
import MeLiga from "components/pages/MeLiga";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyleComposed />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/contato" element={<Contact />} />
          <Route path="/meLigue" element={<MeLiga />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
