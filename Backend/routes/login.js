const User = require("../modals/userSchema");
const bcrypt= require("bcrypt");

const login=async(req, res)=>{

    try{
        console.log(req.body);
        const {email, password}= req.body;

        const user= await User.findOne({email});
        if(!user){
            return res.status(401).send("Email does not exist");
        }
        const pass= await bcrypt.compare(password, user.userPassword);
        if(pass){
            return res.status(200).send("Login Success");
        }else{
            return res.status(401).send("Password did not match");
        }


    }catch{
        res.status(500).send("Internal Error");
    }
}

module.exports=login;