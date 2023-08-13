const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = require("./database/mongo-connection");
const userRouter = require("./routes/index");

const app = express();
app.use(express.json());

PORT = 3001;

// app.post("/sign-up",  (req, res) => signUp(req, res));

const startServer = async () => {
  try {
    app.use("/api", userRouter);
    
    await connectDb();

    app.listen(PORT, () => {
      console.log("Server is running in the PORT No. " + PORT);
    });
  } catch (err) {
    console.error(err);
  }
};

startServer();

// P20olvgmZm2xCg57
