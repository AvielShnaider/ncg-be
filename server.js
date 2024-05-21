const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
//enabling to work with all localhosts.
app.use(cors());

//const hostName = "www.nrg-center.co.il";
const port = 4000;

app.post("/submit-recipt", async (req, res) => {
  // need to check the number

  const number = req.body.number;
  console.log(number);

  console.log("submit workd server side ");

  fs.writeFile("formNumbers.txt", `${number}\n`, (err) => {
    if (err) {
      throw err;
    }
    console.log("datasaved");
  });
  res.send("number as been updated ");
});

/// other function
app.get("/get-number", async (req, res) => {
  console.log("hi im getting number");
  fs.readFile("formNumbers.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    console.log(data);
    res.send(data);
  });
});
app.listen(port, () => {
  console.log(`Server running at `);
});
