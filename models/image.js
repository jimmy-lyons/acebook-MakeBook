const mongoose = require('mongoose');

// create image schema
const ImageSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    imgType: String
  }
});

// create the Image class and export it
const Images = mongoose.model(`Images`, ImageSchema);

module.exports = Images;