const express = require("express");
const mongoose = require("mongoose");
const Article = require("./web");
const app = express();

const port = 9000;

require("./DB");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/db", async (_, res) => {
  try {
    const result = await Article.find();

    return res.status(200).json(result);
  } catch (e) {
    console.log(e);
    return res.status(500).json(false);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
