// require("dotenv").config();

import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB Connection Failed", err);
  });

/*
1> Fisrt Approuch
import express from "express";
const app = express()
(
  // Ifees function
  async () => {
    try {
      await mongoose.connect(`${process.env.DATABASE_URL}/${DB_NAME}`);
      app.on("Error", (error) => {
        console.log(error);
        throw error;
      });

      app.listen(process.env.PORT, () => {
        console.log(`Server is listening on port ${process.env.PORT}.`);
      });
    } catch (error) {
      console.error("ERROR: ", error);
    }
  }
)();
*/
