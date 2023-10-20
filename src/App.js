import "./App.css";
import GlobalStyleComposed from "./styles/GlobalStyle";
import ThemeProvider from "./styles/ThemeProvider";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "routes";

function App() {
  return (
    <ThemeProvider>
      <GlobalStyleComposed />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
