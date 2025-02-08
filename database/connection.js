import mongoose from "mongoose";
import { MONGO_HOST, MONGO_PORT, MONGO_DB } from "../variables/env.js";

export const connectDB = async (callback = Function()) => {
  try {
    const mongoURI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB}`;
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected!");
    callback();
  } catch (err) {
    console.log("connectDB", err);
  }
};
