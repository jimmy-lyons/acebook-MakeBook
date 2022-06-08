const express = require("express");
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads'});

const HomeController = require("../controllers/home");

router.get("/", HomeController.Index);

router.get("/images", HomeController.FindImage);

router.post("/", upload.single('image'), HomeController.Upload);

module.exports = router;
