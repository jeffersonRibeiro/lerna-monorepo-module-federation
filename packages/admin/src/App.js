import { Button } from '@julius/common';
import ShareablebagApp from 'shareablebag/App';

function App() {
  return (
    <div>
      <div style={{ backgroundColor: 'yellow' }}>
        <p>Common app</p>
        <Button>buy</Button>
      </div>
      <div style={{ backgroundColor: 'grey' }}>
        <p>Shareablebag app</p>
        <ShareablebagApp />
      </div>
    </div>
  );
}

export default App;
