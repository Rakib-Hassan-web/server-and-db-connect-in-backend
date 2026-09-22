const express = require('express');
const routee =express.Router()


routee.get('/', (req, res) => {
  res.send('Hello Rakib!')
})




module.exports=routee