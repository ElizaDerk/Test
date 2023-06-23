import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';

export interface IAuthProps {}

const Auth: React.FunctionComponent<IAuthProps> = (props) => {
  return (
    <div>
      <h1>Auth Page</h1>
      {/* <LoginForm /> */}
      <SignupForm />
    </div>
  );
};

export default Auth;