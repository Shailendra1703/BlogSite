const express = require("express");
const blogController = require("../controller/blogController");
const router = express.Router();
const Blog = require("../modals/blog");

router.get("/", (req, res) => {
  res.redirect("/blogs");
});

router.get("/blogs", blogController.blog_index);

router.get("/blogs/create", blogController.blog_create);

router.post("/blogs", blogController.blog_post);

//route parmeters :id

router.get("/blogs/:id", blogController.blog_details);

router.delete("/blogs/:id", blogController.blog_delete);

module.exports = router;

//
// router.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "New Blog",
//     snippet: "This is where we are in express js",
//     body: "Here is some content you may like",
//   });
//   blog
//     .save()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// router.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });

// router.get("/single-blog", (req, res) => {
//   Blog.findById("62cc76a0d0795df2d9df5422")
//     .then((result) => res.send(result))
//     .catch((err) => console.log(err));
// });
