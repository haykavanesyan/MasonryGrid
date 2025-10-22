import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhotoPage from "./pages/PhotoPage";

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/photo/:id" element={<PhotoPage />} />
    </Routes>
  </Router>
);