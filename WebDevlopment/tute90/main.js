const express = require("express");
const blog = require('./routes/blog')
const app = express();
const port = 3000;
const fs = require("fs")


// ...

app.use('/blog', blog)

// middle ware 1
app.use((req, res, next) => {
  console.log(req.headers);
  req.akshay = "I am Akshay Bhai"
  fs.appendFileSync("logs.txt", `${new Date(Date.now()).toLocaleString()} is a ${req.method} \n`)
  console.log(`${new Date(Date.now()).toLocaleString()} is a ${req.method} \n`);
  next();
});

// middle ware 2
app.use((req, res, next) => {
  // res.send("Hacked by Middleware 2")
  console.log("m2");
  next();
});

app.get("/", (req, res) => {
  // console.log(res);
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("About Us! "+ req.akshay);
});

app.get("/contact", (req, res) => {
  res.send("Contact Us!");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
