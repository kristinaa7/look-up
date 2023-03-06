const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

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
//need to add cloudinary
router.post('/', withAuth, async (req, res) => {
  try {
    console.log('req.body', req.body);
    // Get the path for the uploaded image that is provided by the multer middleware
      const imagePath = req.file.path;
    // upload the image to cloudinary
    const image = await cloudinary.uploader.upload(imagePath);

    const newPost = await Post.create({
      file_URL: req.session.file_URL,
      date_created: req.session.date_created,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
