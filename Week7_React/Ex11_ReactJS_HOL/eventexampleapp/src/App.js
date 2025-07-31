import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  // Method to increment the counter
  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  const incrementValue = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    setMessage("Hello! Value Increased");
  };

  // Method to decrement the counter
  const handleDecrement = () => {
    setCount(count - 1);
    setMessage("Value Decreased");
  };

  // Function with argument
  const sayWelcome = (msg) => {
    setMessage(msg);
  };

  // Synthetic Event Example
  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={handleDecrement}>Decrement</button>

      <p style={{ color: "blue" }}>{message}</p>

      <hr />

      <button onClick={() => sayWelcome("Welcome to the Event App!")}>
        Say Welcome
      </button>

      <hr />

      <button onClick={handleClick}>Synthetic Event (Click Me)</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
