import React from "react";
import "./app.css";

function App() {
  const name = undefined;

  return (
    // jsx에서 형제노드를 함께 쓰려면 묶어줘야함
    <>
      <h1>Hi~</h1>
      {name && <h1>Hello {name} :)</h1>}
      {["🌱", "🌙"].map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
