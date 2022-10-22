import express from "express";
import mongoose from "mongoose";
import Router from "./routes/route.js";

const app = express();

// app.use(express.json());
app.use("/", Router);

const PORT = 8080;

mongoose.connect("mongodb://127.0.0.1:27017/").then(() => {
  app.listen(PORT, () => {
    console.log("server started on port 8080");
  });
});
