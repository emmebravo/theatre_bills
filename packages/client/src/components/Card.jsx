// import { Link } from 'react-router-dom';

const Card = ({ id, image, title, city, theatre, playwright, date }) => {
  // const source = `/feed/${id}`;

  // <div className='flex mx-4 overflow-hidden shadow-lg md:w-full'>
  //   {/* <Link to={source}> */}
  //   <img src={image} alt={title} />
  //   {/* </Link> */}
  // </div>

  const dateNow = new Date(`${date.split('T')[0]}`);

  return (
    <div className='wrapper bg-gray-400 antialiased text-gray-900'>
      <div>
        <img
          src={image}
          alt={title}
          className='w-full object-cover object-center shadow-md'
        />

        <div className='relative px-4 -mt-16  '>
          <div className='bg-gray p-6 rounded-lg shadow-lg'>
            <div className='flex items-baseline'>
              <span className='bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide'>
                {city}
              </span>
              <div className='ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider'>
                {dateNow.toDateString()}
              </div>
            </div>

            <h4 className='mt-1 text-xl font-semibold uppercase leading-tight truncate'>
              {title}
            </h4>

            <div className='mt-1'>{playwright}</div>
            <div className='mt-4'>
              <span className='text-teal-600 text-md font-semibold'>
                {theatre}
              </span>
              {/* <span className='text-sm text-gray-600'>
                (based on 234 ratings)
              </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
