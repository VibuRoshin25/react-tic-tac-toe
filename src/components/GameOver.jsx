import React from "react";

const GameOver = ({ winner, onRestart }) => {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      <p> {winner !== null ? `${winner} Won!!` : "It's a draw :<"}</p>
      <button onClick={onRestart}>Play again!</button>
    </div>
  );
};

export default GameOver;
