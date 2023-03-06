const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');
//useful for form-data
const multer = require('multer');

// Configure multer middleware to store uploaded images in the uploads folder on our server (these will be removed later)
const upload = multer(({ dest: "uploads/" }));

const cloudinary = require('../../utils/cloudinary');

// The `/api/posts` endpoint
router.get('/', async (req, res) => {
  try {
    const userData = await Post.findAll({
    });
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE new post
router.post('/', withAuth, upload.single("file"), async (req, res) => {
  try {
    console.log('req.body', req.body);
    // Get the path for the uploaded image that is provided by the multer middleware
    console.log('req.file', req.file);
      const imagePath = req.file.path;
    // upload the image to cloudinary
    const image = await cloudinary.uploader.upload(imagePath);

    const newPost = await Post.create({
      file_URL: image.secure_url,
      date_created: req.session.date_created,
      user_id: req.session.user_id,
    });

    res.status(200).json({ message: "Success"});
  } catch (err) {
    res.status(400).json({ message: 'Something went wrong'});
  }
});

module.exports = router;
