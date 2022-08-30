import { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [loginObj, setLoginObj] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleLogin = (event) => {
    const { name, value } = event.target;
    setLoginObj({
      ...loginObj,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      data: loginObj,
      withCredentials: true,
      url: `${process.env.REACT_APP_BACKEND}/users/login`,
    }).then((response) => console.log(response));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={user.email}
          onChange={handleLogin}
          error={errors.email}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={user.password}
          onChange={handleLogin}
          error={errors.password}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Login;
