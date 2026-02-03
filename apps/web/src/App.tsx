import { Button } from '@baseui-portable-repro/ui/Button';
import { useState } from 'react';
import ReduxButton from './components/ReduxButton';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </Button>
      <ReduxButton product="test" />
    </>
  );
}

export default App;
