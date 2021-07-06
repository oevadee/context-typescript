import React, {
  Dispatch,
  SetStateAction,
  useContext,
  createContext,
  ReactNode,
  useMemo,
  useState,
} from "react";

export interface CounterStore {
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
}

export const CounterContext = createContext<CounterStore | null>(null);

export const useCounter = () => useContext(CounterContext) as CounterStore;

interface Props {
  children: ReactNode;
}

const Counter = ({ children }: Props) => {
  const [counter, setCounter] = useState(0);
  const counterStore = useMemo<CounterStore>(
    () => ({
      counter,
      setCounter,
    }),
    [counter, setCounter]
  );

  return (
    <CounterContext.Provider value={counterStore}>
      {children}
    </CounterContext.Provider>
  );
};

export default Counter;
