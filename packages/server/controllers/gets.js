import 'dotenv/config';
import Showtime from '../models/Showtime.js';

const feed = async (request, response) => {
  const user = request.user;
  try {
    const allShows = await Showtime.find().sort({ date: 'desc' });

    console.log('All shows feed');
    response.json({ allShows, user });
  } catch (error) {
    response.status(500).json({ message: error });
  }
};

const getShow = async (request, response) => {
  const user = request.user;
  try {
    const show = await Showtime.findOne({ _id: request.params.id });

    console.log('Show retrieved');
    response.json({ show, user });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export { feed, getShow };
