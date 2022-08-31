import 'dotenv/config';
import Showtime from '../models/Showtime.js';
import cloudinary from '../middleware/cloudinary.js';

const createPost = async (request, response) => {
  try {
    const result = await cloudinary.uploader.upload(request.file.path);

    const show = await Showtime.create({
      userId: request.user.id,
      title: request.body.title,
      playwright: request.body.playwright,
      show_type: request.body.show_type,
      city: request.body.city,
      country: request.body.country,
      theatre_name: request.body.theatre_name,
      show_date: request.body.show_date,
      image: result.secure_url,
      cloudinaryId: result.public_id,
    });
    console.log('Show has been added');
    response.json({ message: 'Post Created!', show });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const deletePost = async (request, response) => {
  try {
    const show = await Showtime.findById(request.params.id);
    if (request.user.id !== show.userId) {
      response.redirect('/feed');
    } else {
      await Showtime.deleteOne({
        _id: request.params.id,
      });

      await cloudinary.uploader.destroy(show.cloudinaryId);
      console.log('Show has been deleted');
      response.json({ message: 'Post has been deleted!' });
    }
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

export { createPost, updatePost, deletePost };
