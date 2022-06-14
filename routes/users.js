const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});

const UsersController = require("../controllers/users");
const PhotoController = require("../controllers/photos");

router.get("/new", UsersController.New);
router.get("/profile", UsersController.Index);
router.post("/", upload.single('photo'), UsersController.Create);
router.post("/profile/profile-image", upload.single('photo'), PhotoController.Photo);

module.exports = router;
