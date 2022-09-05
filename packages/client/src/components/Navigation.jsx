import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='relative container mx-auto p-6'>
      <div className='flex items-center justify-between'>
        <div className='pt-2'>logo goes here</div>
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
