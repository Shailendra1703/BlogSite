const express = require("express");
const mongoose = require("mongoose");
const blogRoutes = require("./Routes/blogRoutes");
const app = express();
//mongoose in an ODM object documenting mapping libraray
const Mongodb =
  "mongodb+srv://Shailendra:allsmall786@practice.xds41.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(Mongodb, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");

//  for static file like css
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); //middleware

app.get("/about", (req, res) => {
  res.render("about", { title: "About" });
});

//blog routes
app.use(blogRoutes);
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

//middleWare ----- anything that runs between a request and response

// app.use((req, res, next) => {
//   console.log("New Request is made ...");
//   console.log("host : ", req.hostname);
//   console.log("Path : ", req.path);
//   console.log("method : ", req.method);
//   next(); // to load the next functions or remaing codes
// });

// const blogs = [
//   {
//     title: "Hero India",
//     snippet:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis deleniti voluptatum eaque molestias ipsam a autem autnostrum iure ut magni in, esse quod, ex culpa. Veritatis, deserunt odit!",
//   },
//   {
//     title: "Hero Africa",
//     snippet:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis deleniti voluptatum eaque molestias ipsam a autem autnostrum iure ut magni in, esse quod, ex culpa. Veritatis, deserunt odit!",
//   },
//   {
//     title: "Hero Asia",
//     snippet:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit perspiciatis deleniti voluptatum eaque molestias ipsam a autem autnostrum iure ut magni in, esse quod, ex culpa. Veritatis, deserunt odit!",
//   },
// ];
// res.render("index", { title: "Home", blogs: blogs });
