import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Auth from './pages/Auth';
import Home from './pages/Home';
import { useState } from 'react';
import LoginForm from './components/LoginForm';


const App: React.FunctionComponent = () => {
 const [isAuth, setAuth] = useState(false)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<LoginForm setAuth={setAuth} />} />
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter> 
  );
};

export default App;
