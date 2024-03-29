import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Feed = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await axios.get(`/api/gets/feed`, {
          withCredentials: true,
        });
        const data = await response.data.allShows;
        setShowData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchShow();
  }, []);

  let shows;
  if (!showData) {
    shows = '';
  } else {
    shows = showData?.map((show) => (
      <Card
        key={show._id}
        id={show._id}
        image={show.image}
        city={show.city}
        title={show.title}
        theatre={show.theatre_name}
        playwright={show.playwright}
        date={show.show_date}
      />
    ));
  }

  return (
    <>
      <h2 className='max-w-md text-4xl font-bold text-center md:text-5xl md:text-left pb-4'>
        Shows
      </h2>
      {!showData?.length ? (
        <h3 className='text-2xl font-bold'>
          You haven't digitized any playbills yet...
        </h3>
      ) : (
        <div className='grid grid-cols-1 gap-4 grid-flow-row md:grid-cols-3'>
          {shows}
        </div>
      )}
    </>
  );
};

export default Feed;
