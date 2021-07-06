import React, { useState } from "react";
import { useCounter } from "../context/Counter";
import NestedCounter from "./NestedCounter";

const Counter = () => {
  const { counter, setCounter } = useCounter();

  console.log(counter);

  return (
    <>
      <button
        type="button"
        onClick={() => setCounter((counter) => counter + 1)}
      >
        count is: {counter}
      </button>
      <NestedCounter />
    </>
  );
};

export default Counter;
