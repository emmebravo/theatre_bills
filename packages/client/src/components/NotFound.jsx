import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h3>Not Found</h3>
      <p>
        You've come to the end of the road...<Link to='/'>turn back</Link>
      </p>
    </div>
  );
};

export default NotFound;
