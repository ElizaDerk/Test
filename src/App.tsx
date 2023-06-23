import './App.css';
import { BrowserRouter } from 'react-router-dom';
// import Auth from './pages/Auth';
// import Home from './pages/Home';
// import { useState } from 'react';
// import LoginForm from './components/LoginForm';
import { AuthProvider } from "./context/AuthContext"
import Routes from "./Routes"
// import ProtectedRoute from './components/ProtectedRoute';


const App: React.FunctionComponent = () => {
//  const [isAuth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter> 
  );

  
};

export default App;
