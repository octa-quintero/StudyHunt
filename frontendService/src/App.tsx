import { BrowserRouter } from 'react-router-dom';
import BaseLayout from '../src/screens/baseLayout/baseLayout';

function App(): JSX.Element {
  return (
    <div>
      <BrowserRouter>
        <BaseLayout />
      </BrowserRouter>
    </div>
  );
}

export default App;
