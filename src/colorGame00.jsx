
import React,{useState} from "react";
const Board = () => {
  const [player, setPlayer] = useState(0);
  let status = `Player ${player}`;
  return (
    <div
      className="game-board"
      onClick={(e) => {
        setPlayer(player + 1);
        status = `Player ${player}`;
      }}
    >
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================
export default Board;
