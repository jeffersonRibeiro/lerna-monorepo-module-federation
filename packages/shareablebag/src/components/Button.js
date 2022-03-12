import { useCounter } from '@julius/common';

const Button = () => {
  const { counter, count } = useCounter();

  return <button onClick={() => count()}>Olá federation {counter}</button>;
};

export default Button;
