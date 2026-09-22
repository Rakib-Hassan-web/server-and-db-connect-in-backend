const express = require('express');
const { Registration, login } = require('../controllers/authControllers');
const routee =express.Router()


routee.post("/registration" , Registration)
routee.post("/login" , login)



module.exports=routee