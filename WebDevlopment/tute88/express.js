const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
  res.send('About Us !')
})

app.get('/contact', (req, res) => {
  res.send('Hello Contact Me !')
})

app.get('/blog', (req, res) => {
  res.send('Hello Blog!')
})
app.get('/blog/:slug', (req, res) => {
console.log(req);
  res.send(`Hello Intro to ${req.params.slug}`)
})


// app.get('/blog/intro-to-js', (req, res) => {
//   res.send('Intro To Js')
// })
// app.get('/blog/intro-to-python', (req, res) => {
//   res.send('Intro To python')
// })



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})