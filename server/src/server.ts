import express from "express";
const app = express();

const port = 3333

app.get("/", (req, res) => {
  return res.json({success: true});
})

app.listen(port);