import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Products, AboutUs, ContactUs } from "pages";
import { MainLayout } from "layouts";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<MainLayout />}>
          <Route index element={<Products />} />
        </Route>
        <Route path="/about-us" element={<MainLayout />}>
          <Route index element={<AboutUs />} />
        </Route>
        <Route path="/contact-us" element={<MainLayout />}>
          <Route index element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
