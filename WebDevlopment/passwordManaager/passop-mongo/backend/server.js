const express = require("express");
const { MongoClient } = require("mongodb");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");

dotenv.config();

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

// Database Name
const dbName = "passop";
const app = express();
const port = 3000;
app.use(bodyparser.json())

client.connect();

// Get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
  // res.send("Hello World!");
});

// Save a passwords
app.post("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("documents");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
  // res.send("Hello World!");
});


// Delete a passwords

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
