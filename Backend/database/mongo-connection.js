const mongoose= require("mongoose");


 const connectDb=async()=>{
    try{
        mongoose.connect(
            process.env.MONGO_URL, 
            {
              useNewUrlParser: true,
              useUnifiedTopology: true
            }
          );
          console.log("MongoDb connected");
    }catch(err){
        console.log(err);
        // process.exit(1);

    }

}

module.exports= connectDb;