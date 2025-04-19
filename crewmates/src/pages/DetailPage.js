import React from "react";
import { useParams, Link } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();
  const crew = JSON.parse(localStorage.getItem("crewmates") || "[]");
  const crewmate = crew.find((c) => c.id === id);

  if (!crewmate) return <div>Crewmate not found.</div>;

  const getCrewmateEmoji = (color) => {
    switch (color.toLowerCase()) {
      case "red":
        return "🔴";
      case "blue":
        return "🔵";
      case "green":
        return "🟢";
      case "purple":
        return "🟣";
      case "yellow":
        return "🟡";
      case "orange":
        return "🟠";
      case "pink":
        return "🌸";
      case "rainbow":
        return "🌈";
      default:
        return "👽";
    }
  };

  return (
    <div className="page">
      <h1>Crewmate: {crewmate.name}</h1>
      <div style={{ fontSize: "4rem" }}>{getCrewmateEmoji(crewmate.color)}</div>

      <h2>Stats:</h2>
      <p>
        <strong>Color:</strong> {crewmate.color}
      </p>
      <p>
        <strong>Speed:</strong> {crewmate.speed} mph
      </p>

      <p style={{ fontStyle: "italic" }}>
        {crewmate.speed < 2.5
          ? "🥲 This crewmate might need a speed boost..."
          : "⚡ Zoom zoom! This one's built for speed!"}
      </p>

      <p>
        <strong>Link to this crewmate:</strong>
        <br /> <code>{window.location.href}</code>
      </p>

      <Link to={`/edit/${crewmate.id}`}>
        <button>Wanna edit this Crewmate?</button>
      </Link>
    </div>
  );
};

export default DetailPage;
