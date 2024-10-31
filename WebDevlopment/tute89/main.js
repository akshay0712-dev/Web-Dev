const express = require("express");
const blog = require('./routes/blog')
const shop = require('./routes/shop')


const app = express();
const port = 3000;


app.use(express.static("public"))
app.use('/blog', blog)
app.use('/shop', shop)

app.get("/", (req, res) => {
  console.log("Hey its a get request");
  res.send("Hello World getting Request 12...");
}).post("/", (req, res) => {
  console.log("Hay its a postrequest");
  res.send("Hello World posting Request...");
}).put("/", (req, res) => {
  console.log("Hay its a put request");
  res.send("Hello World putting Request...");
}).delete("/", (req, res) => { 
  console.log("Hay its a delete request");

  res.send("Hello World Delete Request...");
});


// app.get("/index",  (req, res) => {
//   console.log("Hay its a index.hhtml file");
//   res.sendFile('Templet/index.html', {root:__dirname});
// });


app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}/`);
});
