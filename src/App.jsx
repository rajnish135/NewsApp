import Home from './Components/Home';
import ContextProvider from './Components/Context/Store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <ContextProvider>
        <div>
          <Home />
        </div>
      </ContextProvider>
    </BrowserRouter>
  );
};

export default App;
