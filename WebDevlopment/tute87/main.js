import fs from "fs/promises"
// fs.writeFile("Akshay.txt", "Akshya is a good boy")
let a = await fs.readFile("Akshay.txt") 
let b = await fs.appendFile("Akshay.txt", "Akshay is a good bouy \n =>")
console.log(a.toString());