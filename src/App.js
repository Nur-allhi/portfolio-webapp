import "./App.css";
import NavbarMain from "./Components/Navbar/NavbarMain";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <NavbarMain />
    </Router>
  );
}

export default App;
