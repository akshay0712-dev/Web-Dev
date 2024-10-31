use("CrudDb")

db.createCollection("courses")

db.courses.insertOne({
    name: "Harrys Web Dev Free Course",
    price: 0,
    assignments: 12,
    projects: 45
})

db.courses.insertMany(
    [
        {
            "name": "Harrys Web Dev Free Course",
            "price": 0,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Jane's Full Stack Development",
            "price": 50,
            "assignments": 15,
            "projects": 50
        },
        {
            "name": "Ultimate JavaScript Course",
            "price": 30,
            "assignments": 10,
            "projects": 40
        },
        {
            "name": "React Mastery",
            "price": 45,
            "assignments": 8,
            "projects": 30
        },
        {
            "name": "Python for Web Developers",
            "price": 20,
            "assignments": 20,
            "projects": 25
        },
        {
            "name": "Node.js Bootcamp",
            "price": 60,
            "assignments": 12,
            "projects": 35
        },
        {
            "name": "Express.js Essentials",
            "price": 10,
            "assignments": 5,
            "projects": 20
        },
        {
            "name": "Advanced MongoDB",
            "price": 40,
            "assignments": 18,
            "projects": 40
        },
        {
            "name": "HTML & CSS Foundations",
            "price": 25,
            "assignments": 7,
            "projects": 25
        },
        {
            "name": "Frontend Frameworks Overview",
            "price": 35,
            "assignments": 12,
            "projects": 45
        },
        {
            "name": "Backend API Development",
            "price": 55,
            "assignments": 10,
            "projects": 30
        }
    ]
    
)



console.log("here\n");
let a = db.courses.find({price: 0})
// console.log(a.toArray());
console.log(" Count => "+a.count());


// db.courses.updateMany({ price: { $gt: 55 } }, {$set:{price: 50}})

db.courses.deleteMany({price: 50})