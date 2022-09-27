import { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import Single from './Single';

const Feed = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_REACT_APP_BACKEND}/api/gets/feed`,
          { withCredentials: true }
        );
        const data = await response.data.allShows;
        console.log(data);
        setShowData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShow();
  }, []);

  console.log({ showData });

  return (
    <div className='mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <h2 className='sr-only'>Shows</h2>

      <div className='grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
        {showData.map((play) => (
          <Single key={play._id} className='group'>
            <div className='aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8'>
              <img
                src={play.image}
                alt={play.title}
                className='h-full w-full object-cover object-center group-hover:opacity-75'
              />
            </div>
            {/* <h3 className='mt-4 text-sm text-gray-700'>{play.title}</h3>
            <p className='mt-1 text-lg font-medium text-gray-900'>
              {play.city}
            </p> */}
          </Single>
        ))}
      </div>
    </div>
  );
};

export default Feed;
