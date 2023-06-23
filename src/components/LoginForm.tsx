import React, { useContext } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

interface LoginFormValues {
  userName: string;
  password: string;
}

const LoginForm: React.FunctionComponent = () => {

  const validationSchema = Yup.object().shape({
    userName: Yup.string().required('User Name is required'),
    password: Yup.string().required('Password is required'),
  });

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormValues>({
    resolver: yupResolver(validationSchema),
  });


  const {authenticated, setAuthenticated} = useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = () => {
    setAuthenticated(true)
    navigate('/')
  }

  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="loginUserName">User Name</label>
          <input type="text" id="loginUserName" {...register('userName')} />
          {errors.userName && <div>{errors.userName.message}</div>}
        </div>
        <div>
          <label htmlFor="loginPassword">Password</label>
          <input type="password" id="loginPassword" {...register('password')} />
          {errors.password && <div>{errors.password.message}</div>}
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
