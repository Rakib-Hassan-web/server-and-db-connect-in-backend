const express = require('express');
const DBContrroller = require('./DbController');
const app = express()

app.use(express.json)
DBContrroller()

app.get('/', (req, res) => {
  res.send('Hello Rakib!')
})

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})



