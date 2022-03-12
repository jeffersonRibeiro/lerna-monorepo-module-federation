import { useContext } from 'react';

import { CounterContext } from './CounterContextProvider';

const useCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  const count = () => {
    console.log(counter);
    console.log(setCounter);
    setCounter(counter + 1);
  };
  console.log('useCounter> ', counter);

  return {
    counter,
    count,
  };
};

export default useCounter;
