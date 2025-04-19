import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => (
  <div className="sidebar">
    <h2>Home</h2>
    <Link to="/create">Create a Crewmate!</Link>
    <Link to="/gallery">Crewmate Gallery</Link>
  </div>
);

export default Sidebar;
