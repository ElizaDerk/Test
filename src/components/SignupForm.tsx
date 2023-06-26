import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { registerAccount } from '../api';

type UserSubmitForm = {
    fullname: string;
    username: string;
    email: string;
    password: string;

  };

export interface ISignUpFormProps {
  toggleForm: () => void;
}

const SignUpForm: React.FunctionComponent<ISignUpFormProps> = ({ toggleForm }) => {
    const validationSchema = Yup.object().shape({
        fullname: Yup.string().required('Fullname is required'),
        username: Yup.string()
          .required('Username is required')
          .min(6, 'Username must be at least 6 characters')
          .max(20, 'Username must not exceed 20 characters'),
        email: Yup.string()
          .required('Email is required')
          .email('Email is invalid'),
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must be at least 6 characters')
          .max(40, 'Password must not exceed 40 characters'),
    });

    const {register, handleSubmit, formState: { errors }} = useForm<UserSubmitForm>({
        resolver: yupResolver(validationSchema)
    });

    const onSubmit = async(data: UserSubmitForm) => {
      try {
        // Отправка POST-запроса на регистрацию аккаунта
        const response = await registerAccount(data);
        console.log(response); // Обработка успешного ответа
        toggleForm(); // Вызываем функцию переключения формы после успешной регистрации
      } catch (error) {
        console.error(error); // Обработка ошибки
      }
    };
          
    return (
            <div className="register-form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    {...register('fullname')}
                    className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.fullname?.message}</div>
                </div>
        
                <div className="form-group">
                  <label>Username</label>
                  <input
                    type="text"
                    {...register('username')}
                    className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.username?.message}</div>
                </div>
        
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="text"
                    {...register('email')}
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.email?.message}</div>
                </div>
        
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    {...register('password')}
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                  />
                  <div className="invalid-feedback">{errors.password?.message}</div>
                </div>
        
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Register
                  </button>
                </div>
              </form>
            </div>
          );
}

export default SignUpForm;
