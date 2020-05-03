import React from "react";
import "./PlayerCard.css";

const PlayerCard = (props) => {
  return (
    <div className="PlayerCard">
      <div className="PlayerInformation">
        <p>Player: {props.Player}</p>
        <p>Age: {props.Age}</p>
        <p>Country: {props.Country}</p>
        <p>Position: {props.Position}</p>
      </div>
    </div>
  );
};

export default PlayerCard;
