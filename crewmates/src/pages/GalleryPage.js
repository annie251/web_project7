import React from "react";
import { Link } from "react-router-dom";

const GalleryPage = () => {
  const crew = JSON.parse(localStorage.getItem("crewmates") || "[]");

  const colorCount = {};
  crew.forEach((c) => {
    colorCount[c.color] = (colorCount[c.color] || 0) + 1;
  });
  const total = crew.length;

  const avgSpeed = crew.reduce((sum, c) => sum + c.speed, 0) / crew.length;

  return (
    <div className="page">
      <div>
        <h2>Color Distribution</h2>
        {Object.entries(colorCount).map(([color, count]) => (
          <p key={color}>
            {color}: {Math.round((count / total) * 100)}%
          </p>
        ))}
      </div>

      <h1>Your Crewmate Gallery!</h1>
      {crew.length === 0 ? (
        <p>
          You haven’t made a crewmate yet!{" "}
          <Link to="/create">Create one here!</Link>
        </p>
      ) : (
        <div className="grid">
          {crew.map((c) => (
            <div
              key={c.id}
              className="card"
              style={{
                borderColor:
                  avgSpeed > 5 ? "lime" : avgSpeed > 2.5 ? "gold" : "red",
                borderWidth: "3px",
                borderStyle: "solid",
              }}
            >
              <p>
                <strong>Name:</strong> {c.name}
              </p>
              <p>
                <strong>Speed:</strong> {c.speed} mph
              </p>
              <p>
                <strong>Color:</strong> {c.color}
              </p>
              <Link to={`/edit/${c.id}`}>Edit Crewmate</Link>
              <br />
              <Link to={`/crewmate/${c.id}`}>View Details</Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
