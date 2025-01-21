import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import NikkahPage from "./pages/NikkahPage";
import WeddingPage from "./pages/WeddingPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/nikkah" element={<NikkahPage />} />
        <Route path="/wedding" element={<WeddingPage />} />
        <Route path="/" element={<Navigate replace to="/wedding" />} />
      </Routes>
    </Router>
  );
}

export default App;
