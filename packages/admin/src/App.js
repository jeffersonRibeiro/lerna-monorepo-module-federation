import { Button } from '@julius/common';
import ShareablebagButton from 'shareablebag/Button';
import ShareablebagApp from 'shareablebag/App';

function App() {
  return (
    <div>
      <div style={{ backgroundColor: 'yellow' }}>
        <p>Common app</p>
        <Button>Olá galera</Button>
      </div>
      <div style={{ backgroundColor: 'grey' }}>
        <p>Shareablebag app</p>
        <ShareablebagButton />
        <ShareablebagApp />
      </div>
    </div>
  );
}

export default App;
