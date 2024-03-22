import React from "react";
import { useState } from "react";
const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  let playerName = <span className="player-name">{name}</span>;
  let buttonVal = "Edit";

  if (isEditing) {
    playerName = <input type="text" name="" id="" required value={name} />;
    buttonVal = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((editing) => !editing)}>
        {buttonVal}
      </button>
    </li>
  );
};

export default Player;
