Front-End Code:

<script>

async function addData() {
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 seconds timeout

        try {
          let response = await fetch("/generate", {
            signal: controller.signal,
          });
          clearTimeout(timeoutId);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          let result = await response.json();
          console.log(result);
          console.log("Added");
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    </script>

Back-End Code:
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

];
let lastName = [
"Nair",
"Sharma",
"Mehta",
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

];
for (let i = 0; i < 10; i++) {
let e = new Employee({
name: `${i + 1} ${
        firstName[Math.floor(Math.random() * firstName.length)]
      } ${lastName[Math.floor(Math.random() * lastName.length)]}`,
salary: Math.floor(Math.random() _ (500000)) + 50000,
city: `${cityName[Math.floor(Math.random() _ cityName.length)]}`,
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
