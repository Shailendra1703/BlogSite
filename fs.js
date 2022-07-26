const fs = require("fs");

const readStream = fs.createReadStream("./docs/blog2.txt", {
  encoding: "utf8",
});
const writeStream = fs.createWriteStream("./docs/blog3.txt", {
  encoding: "utf8",
});

readStream.pipe(writeStream);

// readStream.on("data", (chunk) => {
//   console.log("=========NEW CHUNK==========");
//   console.log(chunk);
//   writeStream.write("\n NEW CHUNK\n");
//   writeStream.write(chunk);
// });

//piping

// fs.readFile("./docs/blog1.txt", (err, data) => {
//   if (err) console.log(err);
//   console.log(data.toString());
// });

// fs.writeFile("./docs/blog1.txt", "My name is Shailendra", (err) => {
//   if (err) console.log(err);
//   console.log("Done");
// });

//deleting the files

// if (fs.existsSync("./docs/delete.txt")) {
//   fs.unlink("./docs/delete.txt", (err) => {
//     if (err) throw err;
//     console.log("deleted");
//   });
// }

// creating a read stream
