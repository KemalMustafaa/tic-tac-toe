import { useState } from "react";

//membuat component
function Squere() {
  return <button className="squere">X</button>;
}

export default function App() {
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
