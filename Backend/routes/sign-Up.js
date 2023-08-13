const User = require("../modals/userSchema");
const bcrypt= require("bcrypt");
const moment= require("moment")

const signUp = async (req, res) => {
  try {

    console.log(req.body);
    
    const {
      name,
      email,
      date_of_birth,
      password,
      address,
      phone,
      city,
      state,
      zip_code,
      country,
      security_question,
      security_answer,
    } = req.body;

    // const salt= await bcrypt.genSalt();
    
    const formattedDateOfBirth = moment(date_of_birth, 'DD/MM/YYYY').toDate();


    const hashedPassword= await bcrypt.hash(password, 10)

    const user= await User.findOne({email});

    if(user){
        return res.status(400).send("User with email exists");
    }

    await User.insertMany({
        fullName:name,
        
        email: email,
        userPassword: hashedPassword,
        date_of_birth: formattedDateOfBirth ,
        address: address,
        phone: phone,
        city: city,
        state:state,
        zip_code: zip_code,
        country: country,
        security_question: security_question,
        security_answer: security_answer
    });

    res.status(200).send("User Created");
  }
   catch (err) {
    console.log(err);
    
    res.status(500).send("Internal Server Error");
  }
};

module.exports= signUp;
