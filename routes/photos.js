const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const PhotoController = require("../controllers/photos");

router.post("/profile-image", upload.single('photo'), PhotoController.Photo);

module.exports = router;
