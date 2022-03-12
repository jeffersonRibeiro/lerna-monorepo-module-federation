import { createContext, useState } from 'react';

const CounterContext = createContext({ counter: 0, setCounter: () => {} });

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(0);
  console.log('aqyu', counter);

  const CounterContextValue = {
    counter,
    setCounter,
  };

  return (
    <CounterContext.Provider value={CounterContextValue}>
      {children}
    </CounterContext.Provider>
  );
};

export { CounterContext, CounterProvider };
