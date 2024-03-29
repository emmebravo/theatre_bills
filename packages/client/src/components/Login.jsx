import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';

const Login = () => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setLogin({
      ...login,
      [name]: value,
    });
    handleValidate(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`/api/auth/login`, login, {
        withCredentials: true,
      });
      const status = response?.status;
      setUser(status === 200);
      navigate('/feed');
    } catch (error) {
      if (error.response?.status === 404) {
        setErrors('Cannot login');
      }
    }
  };

  const handleValidate = (event) => {
    const { name, value } = event.target;
    setErrors((prev) => {
      const inputObj = { ...prev, [name]: '' };

      switch (name) {
        case 'email':
          if (!value) {
            inputObj[name] = 'Please enter your email';
          }
          break;
        case 'password':
          if (!value) {
            inputObj[name] = 'Please enter your password';
          }
          break;
        default:
          break;
      }
      return inputObj;
    });
  };

  return (
    <div className='flex flex-col items-center px-6'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold tracking-wider md:text-4xl'>
          Login
        </h2>

        <p className='mt-2 text-center text-sm text-gray-600 max-w'>
          Need an account?{' '}
          <Link
            to='/register'
            className='font-medium text-green hover:text-green focus:outline-none focus:ring-2 focus:ring-green'
          >
            Register here
          </Link>
        </p>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit} className='mb-0 space-y-6'>
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <div className='mt-1'>
                <input
                  type='email'
                  name='email'
                  placeholder='Email'
                  value={login.email}
                  onChange={handleLogin}
                  onBlur={handleValidate}
                  required
                  className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
                />
                {errors.email && (
                  <span className='text-coral'>{errors.email}</span>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor='password'
                className='block text-sm font-medium text-gray-700'
              >
                Password
              </label>
              <div className='mt-1'>
                <input
                  type='password'
                  name='password'
                  placeholder='Password'
                  value={login.password}
                  onChange={handleLogin}
                  onBlur={handleValidate}
                  required
                  className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
                />
                {errors.password && (
                  <span className='text-coral'>{errors.password}</span>
                )}
              </div>
            </div>
            <div>
              <button className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green'>
                submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
