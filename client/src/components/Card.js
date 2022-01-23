import React from "react";
import "../App.css";
function Card({ item }) {
  return (
    <div className="card">
      <h3>{item.title}</h3>
      <hr />
      <div className="card-text">
        <p>
          {item.title} is the category that builds the android and the ios app
          for the fest. Your job as organizers will be to come up with new and
          interesting features for the app. If you are interested in development
          of mobile applications then this is the perfect category for you.
        </p>
      </div>
    </div>
  );
}

export default Card;
