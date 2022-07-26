
// server code represents the type  of response sent to the browser;

// 200 => OK
// 301 => resource is removed
// 404 => page not found
// 500 => internal server error


const http = require("http");
const fs = require("fs");
let home = fs.readFileSync("index.html");
let contact = fs.readFileSync("./contact.html");
let services = fs.readFileSync("./services.html");

const hostname = "127.0.0.1";
const port = 3000;
const server = http.createServer((req, res) => {
  // console.log(req.url);
  url = req.url;
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");

  if (url == "/") {
    res.write('<head><link rel="stylesheet" href="style.css"></head>');
    res.write(home);
    res.end(); 
  } else if (url == "/contact") res.end(contact);
  else if (url == "/services") res.end(services);
  else res.end(`<h1>404 Not found</h1>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



