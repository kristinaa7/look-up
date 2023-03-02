const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

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
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
