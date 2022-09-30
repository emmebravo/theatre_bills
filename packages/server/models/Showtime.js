import mongoose from 'mongoose';

const ShowtimeSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  theatre_name: {
    type: String,
    required: false,
  },
  playwright: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  show_date: {
    type: Date,
    require: false,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

const Showtime = mongoose.model('showtime', ShowtimeSchema);

export default Showtime;
