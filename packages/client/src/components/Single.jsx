const Single = ({ show }) => {
  return (
    <div className='flex flex-col sm:mx-auto sm:w-full sm:max-w-md md:w-1/2 md:px-6'>
      <h2 className='mt-6 text-center text-3xl font-extrabold tracking-wider md:text-4xl'>
        Preview
      </h2>
      {previewImg && (
        <img src={previewImg} alt='chosen image' className='h-auto' />
      )}
    </div>
  );
};

export default Single;
