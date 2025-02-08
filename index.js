import express from "express";
import { connectDB } from "./database/connection.js";
import { MESSAGE } from "./variables/env.js";
import Users from "./database/models/Users.js";

const app = express();

app.get("/", async (req, res) => {
  const users = await Users.find({});
  res.json({ message: MESSAGE, users });
});

connectDB(() => {
  app.listen(5000, () => console.log("App runing at http://localhost:5000"));
});
