import { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [show, setShow] = useState({
    title: '',
    playwright: '',
    theatre_name: '',
    show_date: '',
    city: '',
  });
  const [upload, setUpload] = useState();

  const [errors, setErrors] = useState({
    title: '',
    playwright: '',
    theatre_name: '',
    show_date: '',
    city: '',
  });

  const handleShow = (event) => {
    const { name, value } = event.target;
    setShow({
      ...show,
      [name]: value,
    });
    // handleValidate(event);
  };

  const handleUpload = (event) => {
    const file = event.target.files[0];
    setUpload(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!upload) return;
    uploadShowData(upload);
  };

  const uploadShowData = (upload) => {
    const formData = new FormData();
    formData.append('title', show.title);
    formData.append('playwright', show.playwright);
    formData.append('theatre_name', show.theatre_name);
    formData.append('show_date', show.show_date);
    formData.append('city', show.city);
    formData.append('image', upload);

    axios
      .post(`http://localhost:5000/api/posts/create-show`, formData)
      .then((response) => console.log(response))
      .catch((error) => {
        console.error(error);
      });
  };

  // const handleValidate = (event) => {
  //   const { name, value } = event.target;
  //   setErrors((prev) => {
  //     const inputObj = { ...prev, [name]: '' };

  //     switch (name) {
  //       case 'name':
  //         if (!value) {
  //           inputObj[name] = 'Please enter a name';
  //         }
  //         break;
  //       case 'email':
  //         if (!value) {
  //           inputObj[name] = 'Please enter an email';
  //         }
  //         break;
  //       case 'password':
  //         if (!value) {
  //           inputObj[name] = 'Please enter a password';
  //         } else if (register.password2 && value !== register.password2) {
  //           inputObj['password2'] = 'Passwords do not match';
  //         } else {
  //           inputObj['password2'] = register.password2 ? '' : errors.password2;
  //         }
  //         break;

  //       case 'password2':
  //         if (!value) {
  //           inputObj[name] = 'Please re-enter password';
  //         } else if (register.password && value !== register.password) {
  //           inputObj[name] = 'Passwords do not match.';
  //         }
  //         break;
  //       default:
  //         break;
  //     }
  //     return inputObj;
  //   });
  // };

  return (
    <div className='container flex flex-col items-center px-6 mx-auto mt-10'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <h2 className='mt-6 text-center text-3xl font-extrabold tracking-wider md:text-4xl'>
          Create Show Post
        </h2>
      </div>
      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        {/* <div className='bg-white py-8 px-6 shadow rounded-lg sm:px-10'> */}
        <form onSubmit={handleSubmit} className='mb-0 space-y-6'>
          <div>
            <label
              htmlFor='title'
              className='block text-sm font-medium text-gray-700'
            >
              Title
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='title'
                placeholder='Title'
                value={show.title}
                onChange={handleShow}
                // onBlur={handleValidate}
                className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
              />
              {errors.title && (
                <span className='text-coral'>{errors.title}</span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor='theatre_name'
              className='block text-sm font-medium text-gray-700'
            >
              Theatre's Name
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='theatre_name'
                placeholder="Theatre's Name"
                value={show.theatre_name}
                onChange={handleShow}
                // onBlur={handleValidate}
                className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
              />
              {errors.theatre_name && (
                <span className='text-coral'>{errors.theatre_name}</span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor='playwright'
              className='block text-sm font-medium text-gray-700'
            >
              Playwright
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='playwright'
                placeholder='Playwright'
                value={show.playwright}
                onChange={handleShow}
                // onBlur={handleValidate}
                className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
              />
              {errors.playwright && (
                <span className='text-coral'>{errors.playwright}</span>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor='city'
              className='block text-sm font-medium text-gray-700'
            >
              City
            </label>
            <div className='mt-1'>
              <input
                type='text'
                name='city'
                placeholder='City'
                value={show.city}
                onChange={handleShow}
                // onBlur={handleValidate}
                className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
              />
              {errors.city && <span className='text-coral'>{errors.city}</span>}
            </div>
          </div>
          <div>
            <label
              htmlFor='city'
              className='block text-sm font-medium text-gray-700'
            >
              Show's Date
            </label>
            <div className='mt-1'>
              <input
                type='date'
                name='show_date'
                placeholder="Show's Date"
                value={show.show_date}
                onChange={handleShow}
                // onBlur={handleValidate}
                className='w-full border-gray-300 rounded-lg shadow-sm focus:border-green focus:ring-green'
              />
              {errors.show_date && (
                <span className='text-coral'>{errors.show_date}</span>
              )}
            </div>
          </div>
          <div>
            <label
              htmlFor='image'
              className='block text-sm font-medium text-gray-700'
            >
              Upload
            </label>
            <div className='mt-1'>
              <input
                type='file'
                name='image'
                //value={upload}
                onChange={handleUpload}
                // onBlur={handleValidate}
                className='w-full border-gray-300 shadow-sm focus:border-green focus:ring-green'
              />
              {errors.city && <span className='text-coral'>{errors.city}</span>}
            </div>
          </div>
          <button className='w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green hover:bg-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green'>
            submit
          </button>
        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default CreatePost;
