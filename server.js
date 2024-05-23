const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors());

const port = 3333;

app.post("/submit-recipt", async (req, res) => {
  const number = req.body.number;

  //TODO: save number db

  res.send("number as been updated ");
});

app.get("/get-number", async (req, res) => {
  //TODO: read numbers from db
  res.send([]);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
