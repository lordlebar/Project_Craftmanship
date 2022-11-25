const express = require("express");
const app = express();
const port = 8080;

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.put("/api/words", (req, res) => {
  if (req.body.w && req.body.t) {
    res.status(201).send("Ok");
  } else if (req.body.word && req.body.translations) {
    const word = req.body.word;
    const translations = req.body.translations;
    const url = "http://localhost:8080/api/words/" + word;
    res.status(201).json({ word, translations, url });
  } else {
    res.status(406).send("Bad request");
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
