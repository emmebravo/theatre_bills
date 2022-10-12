import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h2 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left pb-4'>
        Not Found...
      </h2>
      <p>
        You've come to the end of the road...<Link to='/'>turn back</Link>
      </p>
    </div>
  );
};

export default NotFound;
