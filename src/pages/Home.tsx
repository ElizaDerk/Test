import { useNavigate } from 'react-router-dom';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={()=> navigate('/auth')}>Logout</button>
    </div>
  );
};

export default Home;
