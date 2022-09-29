import { Link } from 'react-router-dom';

const Card = ({ id, image, title }) => {
  const source = `/show/${id}`;

  return (
    <div className='flex mx-4 overflow-hidden shadow-lg md:w-full'>
      <Link to={source}>
        <img src={image} alt={title} />
      </Link>
    </div>
  );
};

export default Card;
