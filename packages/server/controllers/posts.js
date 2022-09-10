import 'dotenv/config';
import Showtime from '../models/Showtime.js';
import cloudinary from '../middleware/cloudinary.js';

const createShow = async (request, response) => {
  try {
    console.log(request.body);
    const { title, playwright, theatre_name, show_date, city } = request.body;

    const result = await cloudinary.uploader.upload(request.file.path);
    const show = await Showtime.create({
      userId: request.user.id,
      title: title,
      theatre_name: theatre_name,
      playwright: playwright,
      show_date: show_date,
      city: city,
      image: result.secure_url,
      cloudinaryId: result.public_id,
    });

    console.log('Show has been added');
    response.json({ message: 'Post Created!', show });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const deleteShow = async (request, response) => {
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

export { createShow, deleteShow };
