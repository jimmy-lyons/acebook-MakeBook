const userImgModel = require('./../models/userImg.js');
const fs = require('fs');

const HomeController = {
  Index: (req, res) => {
    res.render("home/index", { title: "Acebook" });
  },

  Upload: (req, res) => {
    console.log(req.file.filename);
    
    var uploadedImage = new userImgModel({
      img: {
        data: fs.readFileSync('./uploads/' + req.file.filename), // read in data from /uploads using fs
        imgType: req.file.mimetype
      }
    });
    uploadedImage.save(err => {
      if(err) { console.log(err); return; }
      console.log('image saved');
      fs.unlinkSync('./uploads/' + req.file.filename);
      res.redirect('/');
    });
  },
};

module.exports = HomeController;
