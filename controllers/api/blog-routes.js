const router = require("express").Router();
const { Blog } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newBlogPost = await Blog.create({
      title: req.body.blogTitle,
      content: req.body.blogBody,
      user_id: req.session.user_id,
    });
    res.status(200).json(newBlogPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", withAuth, async (req, res) => {
  try {
    const updateBlogData = await Blog.update(req.body, {
      where: { id: req.params.id },
    });

    if (!updateBlogData) {
      res
        .status(404)
        .json({ message: "Could not find a blog post with this id" });
      return;
    } else {
      res.status(200).json(updateBlogData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const deleteBlogData = await Blog.destroy({
      where: { id: req.params.id },
    });

    if (!deleteBlogData) {
      res
        .status(404)
        .json({ message: "Could not find a blog post with this id" });
    } else {
      res.status(200).json(deleteBlogData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
