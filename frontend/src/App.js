import './App.css';
import './components/custom.css'
import Routing from './components/Routing.js';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routing></Routing>
    </BrowserRouter>
  );
}

export default App;
