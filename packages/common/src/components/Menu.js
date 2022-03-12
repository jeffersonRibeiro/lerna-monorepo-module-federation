import { useCounter } from '../contexts/counter-context';

const Menu = () => {
  const { counter, count } = useCounter();

  return <div onClick={() => count()}>Menu {counter}</div>;
};

export default Menu;
