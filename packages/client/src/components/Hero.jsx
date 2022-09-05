import { Link } from 'react-router-dom';
import Masks from '../assets/masks.svg';

const Home = () => {
  return (
    <div className='container flex flex-col-reverse items-center px-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row'>
      {/* flex container ^^ */}
      {/* left */}
      <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>
        <h1 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left'>
          <span className='text-coral'>Theatre Bills</span> where playbills go
          digital
        </h1>
        <p className='max-w-sm text-center text-darkGray md:text-left'>
          Welcome! Store your playbills digitally plus a ton more info: who you
          went with, city and country of showing, theatre's name, and more!
        </p>
        <div className='flex space-x-2 justify-center md:justify-start'>
          <Link to='/register'>
            <p className='p-3 px-6 pt-2 text-white bg-coral rounded-full baseline'>
              Register
            </p>
          </Link>
          <Link to='/register'>
            <p className='p-3 px-6 pt-2 text-white bg-green rounded-full baseline'>
              Login
            </p>
          </Link>
        </div>
      </div>
      {/* right */}
      <div className='md:w-1/2'>
        <img src={Masks} />
      </div>
    </div>
  );
};

export default Home;
