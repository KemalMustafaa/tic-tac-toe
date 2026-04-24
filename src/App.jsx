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
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squeres[i] || calculateWinner(squeres)) {
      return;
    }

    const nextSqueres = squeres.slice();
    nextSqueres[i] = xIsNext ? "X" : "O";
    setSqueres(nextSqueres);
    setXIsNext(!xIsNext);
  }

  const winner = calculateWinner(squeres);
  let status = "";
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
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
    </>
  );
}

function calculateWinner(squeres) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    // const a = lines[i][0];
    // const b = lines[i][1];
    // const c = lines[i][2];

    const [a, b, c] = lines[i];

    if (squeres[a] && squeres[a] === squeres[b] && squeres[c]) {
      return squeres[a];
    }
  }

  return false;
}
