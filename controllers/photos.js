const Photo = require('../models/photo')
const fs = require('fs');
const path = require('path');

const PhotoController = {
  Photo: (req, res) => {
    const photo = {
      data: fs.readFileSync(path.join(__dirname + '/../uploads/' + req.file.filename)),
      contentType: req.file.mimetype,
    };
    const newPhoto = new Photo({
      userID: req.session.userID, 
      photo: photo
    });
    newPhoto.save((err) => {
      if (err) {
        throw err;
      }
      res.status(201).redirect("/users/profile");
    })
  },
}

module.exports = PhotoController