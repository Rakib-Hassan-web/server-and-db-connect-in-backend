const express = require('express');
const app = express()

const mongoose = require('mongoose');
app.use(express.json)

app.get('/', (req, res) => {
  res.send('Hello Rakib!')
})

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})




mongoose.connect('mongodb+srv://dbconnect_practice:dbconnect_practice@cluster0.7ooynjm.mongodb.net/dbconnect_practice?appName=Cluster0')
  .then(() => console.log('MongoDB Connected!'));
