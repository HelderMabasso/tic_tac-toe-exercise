
import React,{useState} from "react";
const Board = () => {
  const [player, setPlayer] = useState(0);
  let status = `Player ${player}`;
  const handleClick = e => {
    {player === 0 ? setPlayer(1) : setPlayer(0)}
  }
  return (
    <div
      className="game-board"
      onClick={handleClick}
    >
      <div id="info">
        <h1>{status}</h1>
      </div>
    </div>
  );
};

// ========================================
export default Board;
