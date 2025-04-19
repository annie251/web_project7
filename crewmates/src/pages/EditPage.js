import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [crewmate, setCrewmate] = useState(null);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("crewmates") || "[]");
    const found = all.find((c) => c.id === id);
    setCrewmate(found);
  }, [id]);

  const handleUpdate = () => {
    const all = JSON.parse(localStorage.getItem("crewmates") || "[]");
    const updated = all.map((c) => (c.id === id ? crewmate : c));
    localStorage.setItem("crewmates", JSON.stringify(updated));
    navigate("/gallery");
  };

  const handleDelete = () => {
    const all = JSON.parse(localStorage.getItem("crewmates") || "[]");
    const updated = all.filter((c) => c.id !== id);
    localStorage.setItem("crewmates", JSON.stringify(updated));
    navigate("/gallery");
  };

  if (!crewmate) return <div>Loading...</div>;

  return (
    <div className="page">
      <h1>Update Your Crewmate :)</h1>
      <p>
        Current Crewmate Info: Name: {crewmate.name}, Speed: {crewmate.speed},
        Color: {crewmate.color}
      </p>
      <input
        value={crewmate.name}
        onChange={(e) => setCrewmate({ ...crewmate, name: e.target.value })}
      />
      <input
        value={crewmate.speed}
        type="number"
        onChange={(e) =>
          setCrewmate({ ...crewmate, speed: parseFloat(e.target.value) })
        }
      />
      <select
        value={crewmate.color}
        onChange={(e) => setCrewmate({ ...crewmate, color: e.target.value })}
      >
        <option>Red</option>
        <option>Green</option>
        <option>Blue</option>
        <option>Purple</option>
        <option>Yellow</option>
        <option>Orange</option>
        <option>Pink</option>
        <option>Rainbow</option>
      </select>
      <button onClick={handleUpdate}>Update Crewmate</button>
      <button onClick={handleDelete}>Delete Crewmate</button>
    </div>
  );
};

export default EditPage;
