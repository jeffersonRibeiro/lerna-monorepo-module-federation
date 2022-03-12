import { Button } from '@julius/common';
import ShareablebagButton from 'shareablebag/Button';
import ShareablebagApp from 'shareablebag/App';
import { Menu, CounterProvider } from '@julius/common';

function App() {
  return (
    <CounterProvider>
      <div>
        <div style={{ backgroundColor: 'yellow' }}>
          <p>Common app</p>
          <Button>Olá galera</Button>
          <Menu />
        </div>
        <div style={{ backgroundColor: 'grey' }}>
          <p>Shareablebag app</p>
          <ShareablebagButton />
          <ShareablebagApp />
        </div>
      </div>
    </CounterProvider>
  );
}

export default App;
