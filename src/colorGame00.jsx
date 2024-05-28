
import React,{useState} from "react";

const Square = ({id})=>{
  return (
    <button>{id}</button>
  )
}
const Board = () => {
  const [player, setPlayer] = useState(0);
  let status = `Player ${player}`;
  const handleClick = e => {
    {player === 0 ? setPlayer(1) : setPlayer(0)}
    
  }

  const renderSquare = (i) => {
    return <Square id={i}></Square>
  }

  return (
    <div className="game-board">

      <div className="grid-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
       
      <div id="info">
        <h1>{status}</h1>
      </div>

    </div>
  );
};

// ========================================
export default Board;
