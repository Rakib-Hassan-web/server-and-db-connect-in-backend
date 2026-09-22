const express = require('express');

const routee = require('./routes');
const DBContrroller = require('./dbConfig');
const app = express()

app.use(express.json)
DBContrroller()

app.use(routee)
app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})



