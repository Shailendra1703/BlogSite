const express = require("express");
const app = express();

app.listen(3000);

app.get("/", (req, res) => {
  //   res.send("<p>Home Page</p>");
  res.sendFile("./index.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  //   res.send("<p>Home Page</p>");
  res.sendFile("./contact.html", { root: __dirname });
});
app.get("/services", (req, res) => {
  //   res.send("<p>Home Page</p>");
  res.sendFile("./services.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.send("<h1>About Page</h1>");
});

//redirects

app.get("/aboutUs", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  res.status(404).send("<h1>404 Not found</h1>");
});
