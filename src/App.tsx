import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PhotoPage from "./pages/PhotoPage";
import ErrorBoundary from "./components/ErrorBoundary";

export const App = () => (
  <Router>
    <ErrorBoundary>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photo/:id" element={<PhotoPage />} />
      </Routes>
    </ErrorBoundary>
  </Router>
);

export default App