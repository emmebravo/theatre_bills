import 'dotenv/config';
import Showtime from '../models/Showtime.js';

const feed = async (request, response) => {
  try {
    const user = request.user._id;
    const allShows = await Showtime.find({ userId: user }).sort({
      createdAt: 'desc',
    });
    console.log(allShows);
    response.json({
      allShows,
    });
  } catch (error) {
    response.send(error);
  }
};

const getShow = async (request, response) => {
  try {
    const show = await Showtime.findOne({ _id: request.params.id });
    response.json({ show });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export { feed, getShow };
