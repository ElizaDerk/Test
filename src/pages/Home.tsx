import { useSelector, useDispatch } from 'react-redux';
import { logoutThunk } from '../redux/thunks';
import { useNavigate } from 'react-router-dom';

export interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const user = useSelector((state) => state.auth.user);

//   const handleLogout = () => {
//     dispatch(logoutThunk());
//     window.location.href = '/auth';
//   };
const navigate = useNavigate();

  return (
    <div>
      <h1>Home Page</h1>
      {/* {/* {isAuthenticated && user && <p>Welcome, {user.username}!</p>} */}
      <button onClick={()=> navigate('/auth')}>Logout</button>
    </div>
  );
};

export default Home;
