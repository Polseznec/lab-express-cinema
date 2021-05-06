const mongoose = require("mongoose");
const { Schema } = mongoose.Schema;

const movieSchema = new Schema({
  title: String,
  director: String,
  stars: [String],
  image: {
    type: String,
    default: "https://blackmantkd.com/wp-content/uploads/2017/04/default-image.jpg",
  },
  description: String,
  showtimes: [String],
});

const movieModel = mongoose.model("movie", movieSchema);
module.exports = movieModel;