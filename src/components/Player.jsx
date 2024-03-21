import React from "react";

const Player = ({ number, symbol }) => {
  return (
    <li>
      <span className="player">
        <span className="player-name">Player {number}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
};

export default Player;
