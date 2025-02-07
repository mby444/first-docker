import express from "express";

const app = express();
const message = process.env.MESSAGE || "Hello!";

app.get("/", (req, res) => {
  res.json({ message });
});

app.listen(5000, () => console.log("App runing at http://localhost:5000"));
