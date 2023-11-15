import './App.css';
import './components/custom.css'
import Routing from './components/Routing.js';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider} from "@auth0/auth0-react";

function App() {
  return (
      <Auth0Provider
          domain="dev-yfntnylmrl7mvrml.us.auth0.com"
          clientId="S48oOVO0D58gNxelgBSonwentr8joTAs"
          redirectUri="http://localhost:3000/search"
      >
          <BrowserRouter>
              <Routing></Routing>
          </BrowserRouter>
      </Auth0Provider>
  );
}

export default App;
