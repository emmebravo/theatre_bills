import { Link } from 'react-router-dom';
import Masks from '../assets/masks.svg';

const Navigation = () => {
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>
          <Link to='/'>
            <img src={Masks} className='h-12' />
          </Link>
        </div>
        <div className='hidden md:flex space-x-6'>
          <Link to='/login'>Login</Link>
          <Link to='/register'>Register</Link>
          <Link to='/'>About</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
