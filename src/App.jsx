import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Products, AboutUs, ContactUs } from "pages";
import { MainLayout } from "layouts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route element={<MainLayout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
