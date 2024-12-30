import express, { request, response } from "express";
import { MONGO_DB_URL, PORT } from "./config.js";
import mongoose from "mongoose";
import bookRoute from "./routes/bookRoute.js";
import cors from "cors";
const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1 : Allow all Origin with Default of cors(*)
app.use(cors()); //It allows all origins (*) to access your server.

// Option 2 : Allow Custom Origins
// app.use(cors({
//   origin: 'http://localhost:5000', // Allow requests from this origin
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
//   allowedHeaders: ['Content-Type'], // Correct property name
// }));

// Base route for app
app.get("/", (request, response) => {
  //   console.log("Hello Family");
  return response.status(234).send("welcome To MERN class for BookStore");
});

app.use("/books", bookRoute);

mongoose
  .connect(MONGO_DB_URL)
  .then(() => {
    console.log("Hello Ade! you connected to mongoDB!");
    app.listen(PORT, () => {
      console.log(`your app is listening to port : ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
