import 'dotenv/config';
import Showtime from '../models/Showtime.js';
import cloudinary from '../middleware/cloudinary.js';

const createShow = async (request, response) => {
  try {
    const { title, playwright, theatre_name, show_date, city } = request.body;

    const result = await cloudinary.uploader.upload(request.file.path, {
      folder: 'theatrebills',
    });

    await Showtime.create({
      userId: request.user.id,
      title,
      theatre_name,
      playwright,
      show_date,
      city,
      image: result.secure_url,
      cloudinaryId: result.public_id,
    });

    response.json({ message: 'Post Created!' });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const deleteShow = async (request, response) => {
  try {
    const show = await Showtime.findById(request.params.id);
    if (request.user.id !== show.userId) {
      response.status(500).json({ message: 'Unauthorize to delete post' });
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

export { createShow, deleteShow };
