import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
import CounterContext from "./context/Counter";

const App = () => {
  return (
    <div className="App">
      <CounterContext>
        <h1>test</h1>
        <div>
          <Counter />
        </div>
      </CounterContext>
    </div>
  );
};

export default App;
