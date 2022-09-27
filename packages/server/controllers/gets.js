import 'dotenv/config';
import Showtime from '../models/Showtime.js';

const feed = async (request, response) => {
  try {
    const allShows = await Showtime.find().sort({ date: 'desc' });
    response.json({
      allShows,
    });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

const getShow = async (request, response) => {
  try {
    const data = await Showtime.findOne({ _id: request.params.id });
    response.json({ data });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export { feed, getShow };
