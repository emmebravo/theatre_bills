import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();

  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleRegister = (event) => {
    const { name, value } = event.target;
    setRegister({
      ...register,
      [name]: value,
    });
    handleValidate(event);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`/api/auth/register`, register);
      navigate('/login');
    } catch (error) {
      if (error.status) {
        setErrors('Cannot login');
      }
    }
  };

  const handleValidate = (event) => {
    const { name, value } = event.target;
    setErrors((prev) => {
      const inputObj = { ...prev, [name]: '' };

      switch (name) {
        case 'name':
          if (!value) {
            inputObj[name] = 'Please enter a name';
          }
          break;
        case 'email':
          if (!value) {
            inputObj[name] = 'Please enter an email';
          }
          break;
        case 'password':
          if (!value) {
            inputObj[name] = 'Please enter a password';
          } else if (register.password2 && value !== register.password2) {
            inputObj['password2'] = 'Passwords do not match';
          } else {
            inputObj['password2'] = register.password2 ? '' : errors.password2;
          }
          break;

        case 'password2':
          if (!value) {
            inputObj[name] = 'Please re-enter password';
          } else if (register.password && value !== register.password) {
            inputObj[name] = 'Passwords do not match.';
          }
          break;
        default:
          break;
      }

      return inputObj;
    });
  };

  return (
    <div className='container flex flex-col items-center px-6'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold tracking-wider md:text-4xl'>
          Register
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600 max-w'>
          Already registered?{' '}
          <Link
            to='/login'
            className='font-medium text-green hover:text-green focus:outline-none focus:ring-2 focus:ring-green'
          >
            Login
          </Link>
        </p>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'>
          <form onSubmit={handleSubmit} className='mb-0 space-y-6'>
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <div className='mt-1'>
                <input
                  type='text'
                  name='name'
                  placeholder='Name'
                  value={register.name}
                  onChange={handleRegister}
                  onBlur={handleValidate}
                  className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
                />
                {errors.name && (
                  <span className='text-coral'>{errors.name}</span>
                )}
              </div>
            </div>

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
                  value={register.email}
                  onChange={handleRegister}
                  onBlur={handleValidate}
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
                  value={register.password}
                  onChange={handleRegister}
                  onBlur={handleValidate}
                  className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
                />
                {errors.password && (
                  <span className='text-coral'>{errors.password}</span>
                )}
              </div>
            </div>

            <div>
              <label
                htmlFor='password2'
                className='block text-sm font-medium text-gray-700'
              >
                Confirm Password
              </label>
              <div className='mt-1'>
                <input
                  type='password'
                  name='password2'
                  placeholder='Confirm password'
                  value={register.password2}
                  onChange={handleRegister}
                  onBlur={handleValidate}
                  className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
                />
                {errors.password2 && (
                  <span className='text-coral'>{errors.password2}</span>
                )}
              </div>
            </div>
            <button className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green'>
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
