import express from "express";
import mongoose from "mongoose";
import { Employee } from "./models/Employee.js";

const app = express();
const port = 3000;

await mongoose.connect("mongodb://localhost:27017/company");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { data: "data" });
});

app.get("/generate", async (req, res) => {
  await Employee.deleteMany({});
  let firstName = [
    "Divyansh",
    "Parth",
    "Aarav",
    "Sai",
    "Vivaan",
    "Harsh",
    "Dhruv",
    "Om",
    "Kian",
    "Reyansh",
  ];
  let lastName = [
    "Nair",
    "Sharma",
    "Mehta",
    "Singh",
    "Khan",
    "Iyer",
    "Desai",
    "Reddy",
    "Patel",
    "Gupta",
  ];

  let cityName = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Ahmedabad",
    "Chennai",
    "Kolkata",
    "Surat",
    "Pune",
    "Jaipur",
    "Lucknow",
    "Kanpur",
    "Nagpur",
    "Indore",
    "Thane",
    "Bhopal",
    "Visakhapatnam",
    "Pimpri-Chinchwad",
    "Patna",
    "Vadodara",
  ];
  for (let i = 0; i < 10; i++) {
    let e = new Employee({
      name: `${i + 1} ${
        firstName[Math.floor(Math.random() * firstName.length)]
      } ${lastName[Math.floor(Math.random() * lastName.length)]}`,
      salary: Math.floor(Math.random() * (500000)) + 50000,
      city: `${cityName[Math.floor(Math.random() * cityName.length)]}`,
      isManager: Math.random() >= 0.5,
    });
    await e.save();
    // console.log(e.toJSON());
    // console.log(`${e.name} ${e.salary} ${e.city} ${e.isManager}`);
  }
  console.log("done");
  res.status(200).send({ message: "Data generated successfully" });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
