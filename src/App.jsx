import { useState } from "react";

//membuat component
function Squere({ value, onSquereClick }) {
  return (
    <button className="squere" onClick={onSquereClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squeres, setSqueres] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSqueres = squeres.slice();
    nextSqueres[i] = "X";
    setSqueres(nextSqueres);
  }

  return (
    <div className="board">
      <Squere value={squeres[0]} onSquereClick={() => handleClick(0)} />
      <Squere value={squeres[1]} onSquereClick={() => handleClick(1)} />
      <Squere value={squeres[2]} onSquereClick={() => handleClick(2)} />
      <Squere value={squeres[3]} onSquereClick={() => handleClick(3)} />
      <Squere value={squeres[4]} onSquereClick={() => handleClick(4)} />
      <Squere value={squeres[5]} onSquereClick={() => handleClick(5)} />
      <Squere value={squeres[6]} onSquereClick={() => handleClick(6)} />
      <Squere value={squeres[7]} onSquereClick={() => handleClick(7)} />
      <Squere value={squeres[8]} onSquereClick={() => handleClick(8)} />
    </div>
  );
}
