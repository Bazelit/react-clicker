import { useState } from "react";

const App = () => {
  const [num, setNumber] = useState(0);

  const plusHandler = () => {
    setNumber(num + 1);
  };
  const minusHandler = () => {
    setNumber(num - 1);
  };
  return (
    <>
      <h1 style={{ marginBottom: "10px" }}>👋Hello</h1>
      <h2 style={{ marginBottom: "10px" }}>Count: {num}</h2>
      <button onClick={minusHandler}>-</button>
      <button onClick={plusHandler}>+</button>
    </>
  );
};

export default App;
