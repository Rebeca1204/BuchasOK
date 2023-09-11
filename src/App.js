import "./App.css";
import GlobalStyleComposed from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Produtos from "components/pages/Produtos";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyleComposed />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produtos />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
