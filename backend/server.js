import app from "./app.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); 

const mongoUri = process.env.MONGO_URI;
const port = process.env.PORT || 5000; 

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to the database");
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });

app.listen(port, () => {
  console.log(`SERVER HAS STARTED AT PORT ${port}`);
});
