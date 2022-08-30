import { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [registerObj, setRegisterObj] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const handleRegister = (event) => {
    const { name, value } = event.target;
    setRegisterObj({
      ...registerObj,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      method: 'post',
      data: registerObj,
      withCredentials: true,
      url: `${process.env.REACT_APP_BACKEND}/users/register`,
    }).then((response) => console.log(response));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input
          type='name'
          name='name'
          placeholder='Name'
          value={user.name}
          onChange={handleRegister}
          error={errors.name}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={user.email}
          onChange={handleRegister}
          error={errors.email}
        />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={user.password}
          onChange={handleRegister}
          error={errors.password}
        />
        <label htmlFor='password2'>Password2</label>
        <input
          type='password'
          name='password2'
          placeholder='Confirm password'
          value={user.password2}
          onChange={handleRegister}
          error={errors.password2}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default Register;
