import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import GalleryPage from "./pages/GalleryPage";
import EditPage from "./pages/EditPage";
import DetailPage from "./pages/DetailPage";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/create" element={<CreatePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/crewmate/:id" element={<DetailPage />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
