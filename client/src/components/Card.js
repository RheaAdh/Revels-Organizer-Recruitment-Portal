import React from "react";
import "../App.css";
function Card({ item }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <hr />
      <div className="card-text">
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default Card;
