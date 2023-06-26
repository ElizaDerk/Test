import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignupForm';

import { useState } from "react";

export interface IAuthProps {
}

const Auth: React.FunctionComponent<IAuthProps> = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  }

  const handleLoginError = (errorMessage: string) => {
    setError(errorMessage);
    navigate('/auth/login');
  }

  const handleSignupError = (errorMessage: string) => {
    setError(errorMessage);
    navigate('/auth/register');
  }

  return (
    <div>
      <h1>Auth Page</h1>
      {error && <div>{error}</div>}
      {isLoginForm ? <LoginForm toggleForm={toggleForm} onError={handleLoginError} /> 
            : <SignUpForm toggleForm={toggleForm} onError={handleSignupError} />}
    </div>
  );
};

export default Auth;