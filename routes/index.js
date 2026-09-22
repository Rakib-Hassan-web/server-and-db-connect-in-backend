const express = require('express');
const routee =express.Router()

const auth_route =require('./auth')

routee.get('/', (req, res) => {
  res.send('Hello Rakib!')
})

routee.use("/auth" ,auth_route)




module.exports=routee