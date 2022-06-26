const router = require("express").Router();
const { Comment } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      where: {
        id: req.params.id,
      },
    });

    res.status(200).json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", withAuth, async (req, res) => {
  try {
    console.log(req.body.comment);
    const commentData = await Comment.create({
      body: req.body.comment,
      blog_id: req.body.blogPostId,
      user_id: req.session.user_id,
    });

    res.json(commentData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
