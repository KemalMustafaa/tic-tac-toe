import { useState } from "react";

//membuat component
function Squere() {
  const [value, setValue] = useState("");

  function handleClick() {
    setValue("X");
  }

  return (
    <button className="squere" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <div className="board">
      <Squere />
      <Squere />
      <Squere />
      <Squere />
      <Squere />
      <Squere />
      <Squere />
      <Squere />
      <Squere />
    </div>
  );
}
