import express from "express";
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/hello", (req, res) => {
  res.send("ola mundo!");
});

export default app;
