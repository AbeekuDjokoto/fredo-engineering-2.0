import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home, Products } from "./views";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}

export default App;
