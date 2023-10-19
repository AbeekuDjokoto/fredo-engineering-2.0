import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Products, AboutUs } from "./views";
import { ContactUs } from "./views/ContactUs ";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
