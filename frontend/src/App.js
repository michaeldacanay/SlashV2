import './App.css';
import './components/custom.css'
import DataDisplay from './components/DataDisplay';
import DataList from './components/DataList'
import Header from './components/Navbar'
import Search from './components/SearchForm'
import ItemList from './components/ItemList'
import HomePage from './components/HomePage';
import Routing from './components/Routing';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    // <BrowserRouter>
    //   <Routing></Routing>
    // </BrowserRouter>
    <DataDisplay></DataDisplay>
  );
}

export default App;
