// const router = require("express").Router();
// const { Blog } = require("../models");
// const withAuth = require("../utils/auth");

// router.get("/", withAuth, async (req, res) => {
//   try {
//     const blogpostData = await Blog.findAll({
//       where: {
//         user_id: req.session.user_id,
//       },
//     });

//     const blogposts = blogpostData.map((blogpost) =>
//       blogpost.get({ plain: true })
//     );
//     res.render("loggedInBlogPosts", {
//       layout: "dashboard",
//       blogposts,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/edit/:id", withAuth, async (req, res) => {
//   try {
//     const blogpostData = await Blog.findByPk(req.params.id);

//     const blogposts = blogpostData.get({ plain: true });

//     res.render("editBlogPost", {
//       layout: "dashboard",
//       blogposts,
//       loggedIn: req.session.loggedIn,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get("/new", withAuth, async (req, res) => {
//   try {
//     res.render("newBlogPost", {
//       layout: "dashboard",
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;
