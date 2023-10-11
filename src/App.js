import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Products, AboutUs } from "./views";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;
