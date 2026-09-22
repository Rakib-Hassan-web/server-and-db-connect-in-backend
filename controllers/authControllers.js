

const Registration =(req,res)=>{
    try {
        res.send("reg page")
    } catch (error) {
        console.log(error);
        
    }
}


const login =(req,res)=>{
     res.send("login Page")
}


module.exports={login,Registration}