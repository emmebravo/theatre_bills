import mongoose from 'mongoose';

const ShowtimeSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  title: {
    type: String,
    required: true,
  },
  playwright: {
    type: String,
    required: true,
  },
  show_type: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: false,
  },
  theatre_name: {
    type: String,
    required: true,
  },
  show_date: {
    type: Date,
    require: false,
  },
});

const Showtime = mongoose.model('showtime', ShowtimeSchema);

export default Showtime;
