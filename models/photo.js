const mongoose = require("mongoose");

const PhotoSchema = new mongoose.Schema({
  userID: String,
  photo:
    {
        data: Buffer,
        contentType: String
    }
});

const Photo = mongoose.model("Photos", PhotoSchema);

module.exports = Photo;
