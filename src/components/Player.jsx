import React from "react";
import { useState } from "react";
const Player = ({ initialName, symbol }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  let playerSpan = <span className="player-name">{playerName}</span>;
  let buttonVal = "Edit";

  if (isEditing) {
    playerSpan = (
      <input
        type="text"
        name="playerName"
        id="playerName"
        required
        value={playerName}
        onChange={(event) => setPlayerName(event.target.value)}
      />
    );
    buttonVal = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerSpan}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={() => setIsEditing((editing) => !editing)}>
        {buttonVal}
      </button>
    </li>
  );
};

export default Player;
