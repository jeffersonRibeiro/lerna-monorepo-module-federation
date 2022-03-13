import { useState } from 'react';

const Button = ({ children }) => {
  const [counter, setCounter] = useState(0);

  const handleCounter = () => setCounter(counter + 1);

  return (
    <button onClick={handleCounter} style={{ backgroundColor: 'red' }}>
      {children}
      <span> Counter: {counter}</span>
    </button>
  );
};

export default Button;
