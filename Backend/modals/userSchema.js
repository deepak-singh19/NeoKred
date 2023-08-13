const mongoose = require("mongoose");

const UserSchem= new mongoose.Schema({
    fullName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    userPassword:{
        type: String,
        required: true,
        
    },
    date_of_birth:{
        type: Date,
        required: true,
    }, 
    phone:{
        type: Number,
        required: true,
    },
    address:{
        type: String,
        required: true,
    }, city:{
        type: String,
        required:true,
    },
    state:{
        type: String,
        required: true,
    }, 
    zip_code:{
        type: Number,
        required: true,

    },
    country:{
        type: String,
        required: true,
    }, 
    security_question:{
        type: String,
        required: true,
    }, 
    security_answer:{
        type: String,
        required:true,
    }
});

module.exports= User= mongoose.model("User", UserSchem);