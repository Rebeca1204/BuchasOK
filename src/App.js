import "./App.css";
import GlobalStyleComposed from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
// import Home from "./components/pages/Home";
import Produtos from "components/pages/Produtos";
function App() {
  return (
    <ThemeProvider>
      <GlobalStyleComposed />
      <Produtos />
    </ThemeProvider>
  );
}

export default App;
