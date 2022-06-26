const sequelize = require("../config/connection");
const Blog = require("../models/Blog");
const Comment = require("../models/Comment");
const User = require("../models/User");
const blogData = require("./blog-seeds.json");
const commentData = require("./comment-seeds.json");
const userData = require("./user-seeds.json");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Blog.bulkCreate(blogData);

  await Comment.bulkCreate(commentData);

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
