import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from "./context/AuthContext"
import Routes from "./Routes"


const App: React.FunctionComponent = () => {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter> 
  );

  
};

export default App;
