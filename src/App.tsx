import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";

const Home = React.lazy(() => import("./pages/Home"));
const PhotoPage = React.lazy(() => import("./pages/PhotoPage"));

export const App = () => (
  <Router>
    <ErrorBoundary>
      <Suspense fallback={<div />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/photo/:id"
            element={
              <>
                <Home invisible />
                <PhotoPage />
              </>
            }
          />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  </Router>
);

export default App;
