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
      res.redirect('/images');
    });
  },

  FindImage: (req, res) => {
    console.log('looking for image')
    Images.find((err, images) => {
      images = images.map((image) => {
        image.img.data = image.img.data.toString(`base64`);
        console.log(image.img.data);
        return image.toObject();
      })
      console.log('rendering for image')
      res.render(`home/index`, {images: images});
      console.log( {images: images})
      images.forEach((img) => {
        console.log(img.img)
        });
    });
  }
};

module.exports = HomeController;
