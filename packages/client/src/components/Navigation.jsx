import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import axios from 'axios';
import Masks from '../assets/masks.svg';

const Navigation = () => {
  const navigate = useNavigate();
  const { user, setUser } = useAuth();
  const [hamMenu, setHamMenu] = useState(false);

  const handleLogout = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND}/users/logout`,
        {
          withCredentials: true,
        }
      );
      console.log(response);
      setUser(false);
      navigate('/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <Link to='/'>
            <img src={Masks} className='h-12' />
          </Link>
        </div>
        <div className='hidden md:flex space-x-6'>
          {user ? (
            <>
              <Link to='/feed'>Feed</Link>
              <Link to='/create-show'>Create Show</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
              <Link to='/'>About</Link>
            </>
          )}
        </div>

        {/* hamburger icon & menu */}
        <button
          onClick={() => setHamMenu((prev) => !prev)}
          className={`block hamburger md:hidden focus:outline-none ${
            hamMenu ? 'open' : ''
          }`}
        >
          <span className='hamburger-top'></span>
          <span className='hamburger-middle'></span>
          <span className='hamburger-bottom'></span>
        </button>
      </div>

      <div className='md:hidden'>
        <div
          className={`absolute flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-gray sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
            hamMenu ? 'flex' : 'hidden'
          }`}
        >
          {user ? (
            <>
              <Link to='/feed'>Feed</Link>
              <Link to='/create-show'>Create Show</Link>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <>
              <Link to='/register'>Register</Link>
              <Link to='/login'>Login</Link>
              <Link to='/'>About</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
