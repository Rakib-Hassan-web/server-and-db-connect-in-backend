const mongoose = require('mongoose');


const DBContrroller = ()=>{
    
mongoose.connect('mongodb+srv://dbconnect_practice:dbconnect_practice@cluster0.7ooynjm.mongodb.net/dbconnect_practice?appName=Cluster0')
  .then(() => console.log('MongoDB Connected!'));


}

module.exports=DBContrroller