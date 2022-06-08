const Images = require('../models/image.js');
const fs = require('fs');

const HomeController = {
  Index: (req, res,) => {
    res.render("home/index", { title: "Acebook" });
  },

  Upload: (req, res) => {
    console.log(req.file.filename);
    
    var uploadedImage = new Images({
      img: {
        data: fs.readFileSync('./uploads/' + req.file.filename), // read in data from /uploads using fs
        imgType: req.file.mimetype
      }
    });
    uploadedImage.save(err => {
      if(err) { console.log(err); return; }
      console.log('image saved');
      fs.unlinkSync('./uploads/' + req.file.filename);
      res.redirect('/posts');
    });
  },

  FindImage: (req, res) => {
    Images.find((err, images) => {
      images = images.map((image) => {
        image.img.data = image.img.data.toString(`base64`);
        return image.toObject();
      })
      res.render(`./views/home/index.hbs`, {images: images});
    });
  }
};

module.exports = HomeController;
