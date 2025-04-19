import React, { useState } from "react";

const CreatePage = () => {
  const [name, setName] = useState("");
  const [speed, setSpeed] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const newCrewmate = {
    name,
    speed: parseFloat(speed),
    color,
    category,
    id: Date.now().toString(),
  };

  const categoryOptions = {
    Engineer: ["Blue", "Green"],
    Pilot: ["Red", "Yellow", "Orange"],
    Medic: ["Pink", "Purple"],
    Hacker: ["Purple", "Green", "Rainbow"],
  };

  const handleCreate = () => {
    const newCrewmate = {
      name,
      speed: parseFloat(speed),
      color,
      id: Date.now().toString(),
    };
    const existing = JSON.parse(localStorage.getItem("crewmates") || "[]");
    localStorage.setItem(
      "crewmates",
      JSON.stringify([newCrewmate, ...existing])
    );
    window.location.href = "/gallery";
  };

  return (
    <div className="page">
      <h1>Create a New Crewmate</h1>
      <select onChange={(e) => setCategory(e.target.value)} defaultValue="">
        <option value="" disabled>
          Select a category
        </option>
        {Object.keys(categoryOptions).map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
      <input
        placeholder="Enter crewmate's name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter speed in mph"
        type="number"
        onChange={(e) => setSpeed(e.target.value)}
      />
      <select onChange={(e) => setColor(e.target.value)} defaultValue="">
        <option value="" disabled>
          Select color
        </option>
        {(categoryOptions[category] || []).map((c) => (
          <option key={c}>{c}</option>
        ))}
      </select>

      <button onClick={handleCreate}>Create Crewmate</button>
    </div>
  );
};

export default CreatePage;
