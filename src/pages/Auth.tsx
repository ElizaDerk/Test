import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignupForm';

import { useState } from "react";

export interface IAuthProps {
}

const Auth: React.FunctionComponent<IAuthProps> = () => {
  const [isLoginForm, setIsLoginForm] = useState(true)

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm)
  }

  return (
    <div>
      <h1>Auth Page</h1>
      {isLoginForm ? <LoginForm toggleForm={toggleForm} /> : <SignUpForm toggleForm={toggleForm} />}
    </div>
  );
};

export default Auth;