import React from "react";
import { useCounter } from "../context/Counter";

const NestedCounter = () => {
  const { counter, setCounter } = useCounter();
  return (
    <div>
      <h1>NestedCounter is {counter}</h1>
      <button onClick={() => setCounter((counter) => counter - 1)}>
        Substract from counter
      </button>
    </div>
  );
};

export default NestedCounter;
